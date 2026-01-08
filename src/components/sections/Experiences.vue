<template>
  <section 
  id="experiencia"
  class="min-h-screen w-3/6 px-10 py-20 text-white gap-10 max-md:w-full">
    <BaseTitle title="02.Trayectoria" />
    <p class="text-neutral-400 text-sm mt-2">
      Mi recorrido profesional a lo largo de los años.
    </p>
    <ExperiencesList />
  </section>
</template>
<script setup lang="ts">
import ExperiencesList from "../Experiences/ExperiencesList.vue";
import BaseTitle from "../ui/BaseTitle.vue";
</script>
