<template>
    <div :class="`${$options.name}`">
        <button
                v-for="btn in btns"
                :key="btn.title"
                :class="[`${$options.name}__btn`,
                {[`${$options.name}__btn--selected`]: selectedPeriod === btn.value}]"
                @click="emitValue(btn.value)"
        >
            {{ btn.title }}
        </button>
    </div>
</template>

<script>
export default {
    name: 'PeriodBtnGroup',
    props: {selectedPeriod: String},
    data() {
        return {
            btns: [
                {title: 'Day', value: 'timeGridDay'},
                {title: 'Week', value: 'timeGridWeek'},
                {title: 'Month', value: 'dayGridMonth'},
            ],
        };
    },
    methods: {
        emitValue(period) {
            this.$emit('setPeriod', period);
        },
    },
};
</script>

<style lang="scss" scoped>
@import '@/styles/variables';

.PeriodBtnGroup {
    &__btn {
        border: none;
        background-color: $color-primary;
        font-size: $default-font-size;
        margin: 4px;
        outline: none;
        border-radius: 4px;
        cursor: pointer;
        transition: all .3s;
        width: 6.5rem;
        height: 3rem;

        &:hover {
            background-color: darken(#E1E5F9, 5);
            transform: translateY(-2px);
        }

        &:active {

            transform: translateY(0);
        }

        &--selected {
            background-color: #E1E5F9;
        }
    }
}


</style>