<template>
  <section class="min-h-screen w-4/6 p-2 text-white gap-10 max-md:w-full">
    <BaseTitle title="03.Experiencia en proyectos" />
    <p class="text-neutral-400 text-sm mt-2">
      Algunos proyectos en los que he participado.
    </p>
    <div class=" flex flex-col items-center justify-center">
      <HighlightedProjects/>
      <OtherProjects/>
    </div>
  </section>
</template>
<script setup lang="ts">
import HighlightedProjects from "../Projects/HighlightedProjects.vue";
import OtherProjects from "../Projects/OtherProjects.vue";
import BaseTitle from "../ui/BaseTitle.vue";
</script>
