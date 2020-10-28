<template>
    <div :class="`${$options.name}`">
        <select v-for="(select, index) in selects" :key="select.options[0]"
                :class="`${$options.name}__select`"
                :disabled="index !== 2">
            <option
                    v-for="option in select.options"
                    :key="option"
                    value="option"
                    selected>
                {{ option }}
            </option>
        </select>
    </div>
</template>

<script>
export default {
    name: 'CalendarFilters',
    data() {
        return {
            selects: [
                {options: ['Course level']},
                {options: ['Group']},
                {options: ['All classes']},
                {options: ['(UTC +4:00) Asia/Yerevan']},
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables";

.CalendarFilters {
    background-color: #ffffff;
    border-radius: 4px;
    padding: 1.8rem 3rem;

    &__select {
        padding: .7rem 6rem .7rem 1rem;
        border-radius: 4px;
        font-size: $default-font-size;
        min-width: 17rem;
        height: 3.2rem;

        -webkit-appearance: none;
        -moz-appearance: none;
        background: transparent url("data:image/svg+xml;utf8,<svg fill='rgb(125,125,125)' height='20' viewBox='0 0 24 24' width='20' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>") no-repeat;
        background-position-x: 100%;
        background-position-y: .5rem;
        border: 1px solid #D9D9D9;

        &:not(:last-child) {
            margin-right: 2rem;
        }

        &:last-child {
            float: right;
        }
    }
}
</style>