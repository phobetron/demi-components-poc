<template>
  <hello-world />
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { HelloWorld } from 'library-vue2'

export default defineComponent({
  components: {
    HelloWorld
  }
})
</script>
