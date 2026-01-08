<template>
  <span
    class="cursor-default hover:text-white bg-blue-400/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-400/30 transition-colors"
  >
    {{ name }}
  </span>
</template>
<script setup lang="ts">
defineProps<{
  name: string;
}>();
</script>
