<template>
  <div
    class="cursor-default group flex flex-col justify-between rounded-xl bg-neutral-900/80 border border-neutral-800 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-blue-400/40"
  >
    <div class="flex items-center justify-between mb-4">
      <i class="pi pi-folder text-3xl text-blue-400"></i>

      <LinksIcon
        :githubLink="project.repoUrl ?? undefined"
        :demoLink="project.demoUrl ?? undefined"
      />
    </div>

    <div class="mb-6">
      <h3 class="text-lg font-semibold text-neutral-200 mb-2">
        {{ project.title }}
      </h3>

      <p class="text-sm text-neutral-400 leading-relaxed line-clamp-3">
        {{ project.description }}
      </p>
    </div>

    <div>
      <ul class="flex flex-wrap gap-x-4 gap-y-1 text-xs text-neutral-400">
        <BaseBadged
          v-for="(item, index) in project.techStack.slice(0,5)"
          :key="index"
          :name="item"
        />
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProjectType } from "../../Types";
import BaseBadged from "../ui/BaseBadged.vue";
import LinksIcon from "../ui/LinksIcon.vue";

defineProps<{
  project: ProjectType;
}>();
</script>
