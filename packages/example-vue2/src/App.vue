<template>
  <div>
    <hello-options v-model="optionsSuffix" />
    <p v-if="optionsSuffix">
      <output>{{ optionsOutput }}</output>
    </p>
    <hr />
    <hello-setup v-model="setupSuffix" />
    <p v-if="setupSuffix">
      <output>{{ setupOutput }}</output>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { HelloOptions, HelloSetup } from "library/vue2";

export default defineComponent({
  components: {
    HelloOptions,
    HelloSetup,
  },
  data() {
    return {
      optionsSuffix: "",
      setupSuffix: "",
    };
  },
  computed: {
    optionsOutput(): string {
      return `Hello ${this.optionsSuffix}`;
    },
    setupOutput(): string {
      return `Hello ${this.setupSuffix}`;
    },
  },
});
</script>
