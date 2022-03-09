<template>
  <button @click="action">Click</button>
</template>

<script lang="ts">
import { defineComponent } from "vue-demi";

export default defineComponent({
  methods: {
    action() {
      console.log("Hello World");
    },
  },
});
</script>
