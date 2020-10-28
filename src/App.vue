<template>
    <component :is="layout">
        <router-view :layout.sync="layout"/>
    </component>
</template>

<script>
export default {
    data() {
        return {
            layout: 'div', //fallback option
        };
    },
};
</script>

<style lang="scss">
@import "@/styles/calendar";
@import "@/styles/variables";

*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

html {
    font-size: 62.5%; // sets the default size of 1rem to 10px
}

body {
    box-sizing: border-box;
    font-size: 16px;
    font-weight: 400;
    color: $color-default-black;
    font-family: "Rubik", sans-serif;
}

a {
    text-decoration: none;
}
</style>
