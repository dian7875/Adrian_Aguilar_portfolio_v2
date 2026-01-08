<template>
  <div class="flex items-center gap-3">
    <a
      v-if="githubLink"
      :href="githubLink"
      target="_blank"
      rel="noopener noreferrer"
      :class="linkClass"
      aria-label="Repositorio en GitHub"
    >
      <i class="pi pi-github"></i>

      <span v-if="extended" class="text-sm font-medium"> GitHub </span>
    </a>

    <a
      v-if="demoLink"
      :href="demoLink"
      target="_blank"
      rel="noopener noreferrer"
      :class="linkClass"
      aria-label="Demo del proyecto"
    >
      <i class="pi pi-external-link"></i>

      <span v-if="extended" class="text-sm font-medium"> Demo </span>
    </a>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  githubLink?: string;
  demoLink?: string;
  extended?: boolean;
}>();

const linkClass = computed(() =>
  props.extended
    ? "flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium " +
      "bg-neutral-900 border-neutral-700 text-neutral-200 " +
      "hover:border-blue-400 hover:text-blue-400 transition-colors"
    : "text-neutral-400 hover:text-blue-400 transition-colors text-lg"
);
</script>
