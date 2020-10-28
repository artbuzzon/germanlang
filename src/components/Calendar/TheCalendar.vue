<template>
    <div :class="`${$options.name}`">
        <div :class="`${$options.name}__controls-container`">
            <h2 :class="`${$options.name}__header`">Timetable</h2>
            <div :class="`${$options.name}__date-controls`">
                <WeekSelector :dates-period="datesPeriod"/>
                <PeriodBtnGroup @setPeriod="setPeriod" :selected-period="selectedPeriod"/>
            </div>
            <div :class="`${$options.name}__filters`">
                <CalendarFilters/>
            </div>
            <div :class="`${$options.name}__week-controls`">
                <NextBtn :class="`${$options.name}__control-btn ${$options.name}__control-btn--prev`"
                         action-type="prev"/>
                <NextBtn :class="`${$options.name}__control-btn ${$options.name}__control-btn--next`"
                         action-type="next"/>
            </div>
        </div>
        <FullCalendar ref="fullCalendar" :options="calendarOptions"/>
    </div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import {INITIAL_EVENTS, createEventId} from '@/assets/events.js';
import esLocale from '@fullcalendar/core/locales/en-gb';
import {formatDate} from '@fullcalendar/vue';
import PeriodBtnGroup from '@/components/Calendar/PeriodBtnGroup';
import WeekSelector from '@/components/Calendar/WeekSelector';
import CalendarFilters from '@/components/Calendar/CalendarFilters';
import NextBtn from '@/components/Calendar/NextBtn';
import EventBus from '@/assets/event-bus';

export default {
    name: 'TheCalendar',
    components: {
        FullCalendar,
        PeriodBtnGroup,
        WeekSelector,
        NextBtn,
        CalendarFilters,
    },
    data() {
        return {
            selectedPeriod: 'timeGridWeek',
            datesPeriod: '1 januar — 7 januar', //default
            fullCalendarApi: null,
            calendarOptions: {
                plugins: [
                    dayGridPlugin,
                    timeGridPlugin,
                    interactionPlugin, // needed for dateClick
                ],
                headerToolbar: false,
                initialView: 'timeGridWeek',
                locale: esLocale,
                initialEvents: INITIAL_EVENTS,
                editable: true,
                droppable: true,
                eventColor: '#eee',
                eventBorderColor: '#eee',
                eventTextColor: '#272848',
                selectable: true,
                allDaySlot: false,
                nowIndicator: true,
                nowIndicatorContent: '',
                nowIndicatorClassNames: 'custom-now-indicator',
                dayHeaderClassNames: 'fc-custom-header',
                slotLabelFormat: {
                    hour: 'numeric',
                    minute: '2-digit',
                    meridiem: false,
                    hour12: false,
                },
                slotMinTime: '5:00',
                weekends: true,
                dayHeaderFormat: {weekday: 'short', day: 'numeric'},
                eventDurationEditable: true,
                eventDidMount: this.eventRender,
                dayHeaderDidMount: this.headerMounted,
                select: this.createEvent,
                eventClick: this.removeEvent,
                eventsSet: this.handleEvents,
                datesSet: this.setDatesPeriod,
            },
            currentEvents: [],
            datesFormat: {
                month: 'long',
                day: 'numeric',
            },
        };
    },
    methods: {
        eventRender(args) {
            args.el.style.borderLeftWidth = '6px';
            args.el.style.borderColor = args.borderColor;
        },
        setDatesPeriod(args) {
            const startDate = this.formatDatesCustom(args.startStr, this.datesFormat);
            const endDate = this.formatDatesCustom(args.endStr, this.datesFormat);
            this.datesPeriod = startDate + ' — ' + endDate;
        },
        formatDatesCustom(date, format) {
            return formatDate(date, format).split(' ').reverse().join(' ').toLowerCase();
        },
        headerMounted(arg) {
            //here we add a column between the month name and the day number
            const elValue = arg.el.querySelector('a').innerHTML;
            arg.el.querySelector('a').innerHTML = elValue.substr(0, 3) + ',' + elValue.substr(3);
        },
        setPeriod(period) {
            this.fullCalendarApi.changeView(period);
            this.selectedPeriod = period;
        },
        setWeek(payload) {
            if (payload === 'prev')
                this.fullCalendarApi.prev();
            else
                this.fullCalendarApi.next();
        },
        createEvent(selectInfo) {
            //if the event is less then an hour, add 30 minutes
            const difference = Date.parse(selectInfo.endStr) - Date.parse(selectInfo.startStr);
            const endTime = difference <= 1800000
                    ? new Date(Date.parse(selectInfo.endStr) + 1800000).toISOString()
                    : selectInfo.endStr;

            const calendarApi = selectInfo.view.calendar;
            calendarApi.addEvent({
                id: createEventId(),
                userId: '#42',
                title: 'C1 - Autos',
                color: '#FFEECE',
                borderColor: '#FFBC42',
                start: selectInfo.startStr,
                end: endTime,
            });
        },
        removeEvent(clickInfo) {
            if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
                clickInfo.event.remove();
            }
        },
        handleEvents(events) {
            this.currentEvents = events;
        },
    },
    computed: {
        timeFormatted() {
            return formatDate(new Date(), this.calendarOptions.slotLabelFormat);
        },
    },
    created() {
        this.calendarOptions.nowIndicatorContent = this.timeFormatted;
    },
    mounted() {
        this.fullCalendarApi = this.$refs.fullCalendar.getApi();
        EventBus.$on('SET_WEEK', (payload) => {
            if (payload === 'prev')
                this.fullCalendarApi.prev();
            else
                this.fullCalendarApi.next();
        });
    },
};
</script>

<style lang="scss" scoped>
.TheCalendar {
    padding: 4rem;

    &__header {
        font-size: 2.4rem;
        font-weight: 500;
        color: #272848;
    }

    &__date-controls {
        display: flex;
        justify-content: space-between;
        margin: 2rem 0;
    }

    &__week-controls {
        position: relative;
        height: 2rem;
    }

    &__filters {
        margin-top: 1rem;
    }

    &__control-btn {
        position: absolute;
        top: 4rem;
        z-index: 10;

        &--prev {
            left: 5rem;
        }

        &--next {
            right: 0;
        }
    }
}
</style>