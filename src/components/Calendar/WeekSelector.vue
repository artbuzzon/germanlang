<template>
    <div :class="`${$options.name}`">
        <NextBtn action-type="prev"/>
        <p :class="`${$options.name}__current-date`">{{ datesPeriod }}</p>
        <NextBtn action-type="next"/>
    </div>
</template>

<script>
import NextBtn from '@/components/Calendar/NextBtn';

export default {
    components: {NextBtn},
    props: {datesPeriod: String},
    name: 'WeekSelector',
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables";

.WeekSelector {
    display: flex;
    align-items: center;
    font-size: 1.8rem;

    &__current-date {
        margin: 4px 1rem 0;
    }
}
</style>