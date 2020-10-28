<template>
    <div :class="`${$options.name}`">
        <icon :class="`${$options.name}__icon`"
              data="@icon/search.svg"
        />
        <input placeholder="Search"
               type="text"
               :class="`${$options.name}__input`"
        />
    </div>
</template>

<script>
import searchIcon from '@/assets/icons/search.svg';

export default {
    data() {
        return {
            searchIcon,
        };
    },
    name: 'SearchInput',
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables";

.SearchInput {
    display: flex;
    align-items: center;
    min-width: 30rem;
    margin-left: 16rem;

    &__icon {
        margin-right: 1rem;
        width: 1.8rem;
        height: 1.8rem;
        color: #7D7D7D;
    }

    &__input {
        text-decoration: none;
        font-size: $default-font-size;
        border: none;
        height: 3rem;
        outline: none;

    }
}
</style>