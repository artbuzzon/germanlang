<template>
    <div :class="`${$options.name}`">
        <div :class="`${$options.name}__avatar`"></div>
        <p :class="`${$options.name}__name`">Stefan Haak</p>
    </div>
</template>

<script>
export default {
    name: 'UserData',
};
</script>

<style lang="scss" scoped>
.UserData {
    display: flex;
    align-items: center;

    &__avatar {
        height: 3.2rem;
        width: 3.2rem;
        margin-right: 1rem;
        background-color: #eee;
        border-radius: 50%;
        background-image: url("../../assets/user.jpg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    &__name {
        line-height: 2.4rem;
    }
}
</style>