import LayoutDefault from "@/layouts/LayoutDefault";

export default {
  name: "LayoutDefaultRenderless",
  created() {
    this.$parent.$emit("update:layout", LayoutDefault);
  },
  render() {
    return this.$slots.default[0];
  }
};
