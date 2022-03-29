<template>
  <div>
    <hello-world v-model="suffix" />
    <p v-if="suffix">
      <output>{{ output }}</output>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { HelloWorld } from "library/vue2";

export default defineComponent({
  components: {
    HelloWorld,
  },
  data() {
    return {
      suffix: "",
    };
  },
  computed: {
    output() {
      return `Hello ${this.suffix}`;
    },
  },
});
</script>
