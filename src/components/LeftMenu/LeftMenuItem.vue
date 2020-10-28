<template>
    <div :class="`${$options.name}`">
        <div :class="[`${$options.name}__container`, {[`${$options.name}__container`]: selected}]">
            <icon :class="`${$options.name}__icon`"
                  :data="icon"/>
            <p :class="`${$options.name}__title`">{{ title }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LeftMenuItem',
    props: {
        title: String,
        icon: Object,
        selected: Boolean,
    },
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables";

.LeftMenuItem {
    padding: 1.2rem 1rem 1.2rem 0;
    color: $color-tertiary;
    cursor: pointer;
    position: relative;
    transition: all .3s;

    &__container {
        display: flex;
        align-items: center;
        position: relative;
    }

    &__icon {
        margin-right: 1rem;
        color: $color-tertiary;
        width: 2rem;
        height: 2rem;
    }

    &:hover &__icon {
        color: $color-secondary;
    }

    &:hover {
        color: $color-secondary;

        &:after {
            content: "";
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            width: 4px;
            background-color: $color-secondary;
        }
    }
}
</style>