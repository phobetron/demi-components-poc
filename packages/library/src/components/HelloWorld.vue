<template>
  <h1 class="helloWorld">
    Hello
    <span v-if="isVue2">Vue2</span>
    <span v-if="isVue3">Vue3</span>
  </h1>
</template>

<script lang="ts">
import { defineComponent, isVue2, isVue3 } from "vue-demi";

export default defineComponent({
  data() {
    return {
      isVue2,
      isVue3,
    };
  },
});
</script>

<style lang="scss">
.helloWorld {
  color: mediumseagreen;
}
</style>
