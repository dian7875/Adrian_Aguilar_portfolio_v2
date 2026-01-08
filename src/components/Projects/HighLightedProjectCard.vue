<template>
  <article
    class="flex gap-6 items-center max-md:flex-col max-md:shadow-md shadow-neutral-700 max-md:rounded-2xl max-md:p-4"
    :class="containerClass"
  >
  
    <div class="group relative overflow-hidden rounded-xl flex-1">
      <img
        :src="project.imagesUrl[0]"
        :alt="project.title"
        class="w-full h-full object-cover
               brightness-75 contrast-110 saturate-90
               transition-all duration-300
               group-hover:brightness-100
               group-hover:saturate-100"
      />
      <div
        class="absolute inset-0 bg-blue-500/15
               transition-opacity duration-300
               group-hover:opacity-0"
      />
    </div>

    <div class="flex flex-col gap-3 flex-1" :class="contentAlign">
      <h3 class="text-2xl font-bold text-blue-400" :class="textAlign">
        {{ project.title }}
      </h3>

      <p
        class="text-neutral-300 leading-relaxed bg-neutral-900/80 rounded-2xl p-4"
        :class="textAlign"
      >
        {{ project.description }}
      </p>

      <ul class="flex flex-wrap gap-x-4 gap-y-1 text-xs text-neutral-400">
        <BaseBadged
          v-for="(item, index) in project.techStack"
          :key="index"
          :name="item"
        />
      </ul>

      <LinksIcon
        extended
        :githubLink="project.repoUrl ?? undefined"
        :demoLink="project.demoUrl ?? undefined"
      />
    </div>
  </article>
</template>


<script setup lang="ts">
import { computed } from "vue";
import type { ProjectType } from "../../Types";
import BaseBadged from "../ui/BaseBadged.vue";
import LinksIcon from "../ui/LinksIcon.vue";

const props = defineProps<{
  project: ProjectType;
  reverse?: boolean;
}>();

const containerClass = computed(() =>
  props.reverse ? "flex-row-reverse" : "flex-row"
);

const contentAlign = computed(() =>
  props.reverse ? "items-start" : "items-end"
);

const textAlign = computed(() =>
  props.reverse ? "text-left" : "text-right"
);

</script>
