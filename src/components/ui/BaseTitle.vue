<template>
  <div class="flex items-center gap-3">
    <span
      v-if="index"
      class="text-sm font-mono text-blue-400 shrink-0"
    >
      {{ index }}.
    </span>

    <h2
      class="cursor-default text-3xl md:text-4xl font-bold text-blue-400 whitespace-nowrap shrink-0"
    >
      {{ title }}
    </h2>

    <div class="h-px bg-white/20 flex-1"></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  index?: string;
}>();
</script>
