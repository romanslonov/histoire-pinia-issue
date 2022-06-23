<script setup>
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <button :disabled="disabled" v-bind="$attrs" class="bg-blue-500">
    <slot />
  </button>
</template>