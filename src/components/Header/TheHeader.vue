<template>
    <nav :class="`${$options.name}`">
        <img :src="company" alt="company-logo"/>
        <SearchInput/>
        <div :class="`${$options.name}__user-actions`">
            <UserActions/>
            <UserData/>
        </div>
    </nav>
</template>

<script>
import SearchInput from '@/components/Header/SearchInput.vue';
import UserActions from '@/components/Header/UserActions.vue';
import UserData from '@/components/Header/UserData.vue';
import company from '@/assets/static-icons/company.svg';

export default {
    data() {
        return {
            company,
        };
    },
    components: {
        SearchInput,
        UserActions,
        UserData,
    },
    name: 'TheHeader',
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables";

.TheHeader {
    padding: 0 4rem;
    height: 6rem;
    display: flex;
    border-bottom: 2px solid $color-primary;

    &__user-actions {
        display: flex;
        margin-left: auto;
        align-items: center;
    }
}
</style>