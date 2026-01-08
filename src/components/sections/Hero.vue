<template>
  <section
    class="min-h-screen flex flex-col md:flex-row items-center justify-center px-10 text-white"
  >
    <div class="max-w-2xl text-center md:text-left">
      <h2 class="text-3xl">Hola, mi nombre es</h2>
      <h1 class="text-4xl md:text-5xl font-bold mb-2">
        {{ basicInfo?.name }}
      </h1>
      <h2 class="text-xl md:text-2xl text-blue-400 font-medium mb-4">
        {{ basicInfo?.title }}
      </h2>
      <p class="mb-4 text-neutral-300">{{ basicInfo?.subTitle }}</p>
      <p class="mb-4 text-sm text-neutral-400">
        {{ basicInfo?.location }}
      </p>
      <div class=" flex gap-3 max-sm:justify-center">   
        <CvButton/>
        <WhatsappButton/>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useBasicInfo } from "../../composables/useBasicInfo";
import CvButton from "../ui/CvButton.vue";
import WhatsappButton from "../ui/WhatsappButton.vue";

const { basicInfo } = useBasicInfo();
</script>
