<template>
  <hello-world v-model="suffix" />
  <p v-if="suffix">
    <output>{{ output }}</output>
  </p>
</template>

<script lang="ts">
import { HelloWorld } from "library/vue3";

export default {
  components: {
    HelloWorld,
  },
  data() {
    return {
      suffix: "",
    };
  },
  computed: {
    output(): string {
      return `Hello ${this.suffix}`;
    },
  },
};
</script>
