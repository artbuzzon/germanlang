<template>
    <div :class="`${$options.name}`">
        <TheHeader/>
        <div :class="`${$options.name}__content-container`">
            <TheLeftMenu/>
            <main :class="`${$options.name}__main`">
                <slot/>
            </main>
        </div>
    </div>
</template>

<script>
import TheHeader from '@/components/Header/TheHeader';
import TheLeftMenu from '@/components/LeftMenu/TheLeftMenu';

export default {
    name: 'LayoutDefault',
    components: {
        TheHeader,
        TheLeftMenu,
    },
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables";

.LayoutDefault {
    &__content-container {
        display: grid;
        grid-template-columns: 280px 1fr;
    }

    &__main {
        background-color: $color-primary;
        min-height: 100vh;
    }
}

</style>
