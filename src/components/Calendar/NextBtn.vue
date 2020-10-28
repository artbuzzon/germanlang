<template>
    <div :class="`${$options.name}`">
        <button @click="setWeek"
                :class="`${$options.name}__btn`">
            <icon :class="`${$options.name}__icon`"
                  :data="icon"
            />
        </button>
    </div>
</template>

<script>
import EventBus from '@/assets/event-bus';
import LeftArrowIcon from '@/assets/icons/left-arrow.svg';
import RightArrowIcon from '@/assets/icons/right-arrow.svg';

export default {
    name: 'NextBtn',
    props: {
        actionType: {default: 'next', type: String},
    },
    data() {
        return {
            LeftArrowIcon,
            RightArrowIcon,
        };
    },
    methods: {
        setWeek() {
            EventBus.$emit('SET_WEEK', this.actionType);
        },
    },
    computed: {
        icon() {
            return (this.actionType === 'prev') ? this.LeftArrowIcon : this.RightArrowIcon;
        },
    },
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables";

.NextBtn {

    &__icon {
        width: 2rem;
        height: 2rem;
        color: $color-default-black
    }

    &__btn {
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        border-radius: 50%;

        &:hover {
            transform: translateY(-1px);
            background-color: darken($color-primary, 5)
        }

        &:active {
            transform: translateY(0);
        }
    }
}
</style>