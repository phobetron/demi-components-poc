<template>
  <p class="helloWorld" :class="{ '-vue2': isVue2, '-vue3': isVue3 }">
    <label for="helloWorld">Who are you?</label>
    <input type="text" id="helloWorld" v-model="compatibleValue" />
  </p>
</template>

<script lang="ts">
import { defineComponent, isVue2, isVue3 } from "vue-demi";

export default defineComponent({
  props: {
    value: String,
    modelValue: String,
  },
  data() {
    return {
      isVue2,
      isVue3,
    };
  },
  computed: {
    compatibleValue: {
      get(): string | undefined {
        return isVue2 ? this.value : this.modelValue;
      },
      set(value: string): void {
        if (isVue2) {
          this.$emit("input", value);
        } else {
          this.$emit("update:modelValue", value);
        }
      },
    },
  },
});
</script>

<style lang="scss">
.helloWorld {
  label {
    margin-right: 1rem;
  }

  input {
    padding-left: 0;
    padding-right: 0;
    border: 0;
    border-bottom: 1px solid mediumseagreen;
    outline: none;

    &:focus {
      border-bottom-color: darkseagreen;
    }
  }
}
</style>
