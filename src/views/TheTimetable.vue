<template>
  <layout-default-dynamic>
    <div :class="`${$options.name}`">
      <TheCalendar />
    </div>
  </layout-default-dynamic>
</template>

<script>
import LayoutDefaultDynamic from "@/layouts/LayoutDefaultDynamic";
import TheCalendar from "@/components/Calendar/TheCalendar.vue";

export default {
  name: "TheTimetable",
  components: {
    TheCalendar,
    LayoutDefaultDynamic
  }
};
</script>

