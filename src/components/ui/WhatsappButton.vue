<template>
  <a
    v-if="basicInfo?.email && waLink"
    :href="waLink"
    target="_blank"
    rel="noopener noreferrer"
    class="rounded-lg w-fit border px-4 py-2 text-sm font-medium bg-neutral-200 border-neutral-700 text-neutral-900 hover:blue-green-400 hover:text-green-400 transition-all duration-200 hover:scale-[1.02]"
  >
    Whatsapp
  </a>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useBasicInfo } from "../../composables/useBasicInfo";

const { basicInfo } = useBasicInfo();

const waLink = computed(() => {
  if (!basicInfo.value?.phone) return null;

  const phone = basicInfo.value.phone.replace(/\D/g, "");
  const message = encodeURIComponent(
    "Hola Adrian, vi tu portfolio y me gustaría contactarte."
  );

  return `https://wa.me/${phone}?text=${message}`;
});
</script>
