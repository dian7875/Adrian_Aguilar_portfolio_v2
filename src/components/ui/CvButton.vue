<template>
  <a
    v-if="basicInfo?.cvUrl"
    :href="basicInfo.cvUrl"
    target="_blank"
    rel="noopener noreferrer"
    class="inline-block rounded-lg border px-4 py-2 text-sm font-medium bg-neutral-900 border-neutral-700 text-neutral-200 hover:border-blue-400 hover:text-blue-400 transition-all duration-200 hover:scale-[1.02]"
  >
    Ver CV
  </a>
</template>
<script setup lang="ts">
import { useBasicInfo } from "../../composables/useBasicInfo";

const { basicInfo } = useBasicInfo();
</script>
