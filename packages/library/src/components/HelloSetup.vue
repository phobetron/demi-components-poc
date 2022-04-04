<template>
  <p class="helloWorld" :class="{ '-vue2': isVue2, '-vue3': isVue3 }">
    <label for="helloWorld">Who are you?</label>
    <input type="text" id="helloWorld" v-model="compatible.value" />
  </p>
</template>

<script lang="ts">
import { defineComponent, isVue2, isVue3, reactive, watch } from "vue-demi";

export default defineComponent({
  props: {
    value: String,
    modelValue: String,
  },
  setup(props, context) {
    const compatible = reactive({ value: '' });

    function handleValue(value: string | undefined): void {
      if (value !== undefined) compatible.value = value;
    }

    function handleCompatibleValue(value: string): void {
      if (isVue2) {
        context.emit("input", value);
      } else {
        context.emit("update:modelValue", value);
      }
    }

    watch(() => props.value, handleValue, { immediate: true });
    watch(() => props.modelValue, handleValue, { immediate: true });
    watch(() => compatible.value, handleCompatibleValue, { immediate: true });

    return {
      compatible,
      isVue2,
      isVue3,
    };
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
    border-bottom: 1px solid grey;
    outline: none;

    &:focus {
      border-bottom-color: black;
    }
  }
}
</style>
