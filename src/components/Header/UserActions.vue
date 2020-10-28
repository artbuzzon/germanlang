<template>
  <div :class="`${$options.name}`">
    <img :src="actionsIcon" alt="actions-icon" />
  </div>
</template>

<script>
import actionsIcon from "@/assets/static-icons/user-actions.svg";
export default {
  data() {
    return {
      actionsIcon
    };
  },
  name: "UserActions"
};
</script>

<style lang="scss" scoped>
.UserActions {
  display: flex;
  align-items: center;
  margin-right: 2.5rem;
}
</style>