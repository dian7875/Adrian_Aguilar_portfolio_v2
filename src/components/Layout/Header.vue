<template>
  <header
    class="z-50 flex items-center justify-between w-full px-10 py-5 bg-[#0a0a0a]"
    :class="{ 'hidden-header': !showHeader }"
  >
    <span class="font-mono text-sm text-neutral-200">
      &lt; {{ userName }} /&gt;
      <span class="text-blue-400">_</span>
    </span>

    <nav class="flex items-center gap-8">
      <ol
        class="max-sm:hidden flex gap-8 text-sm font-normal list-decimal text-neutral-300 marker:text-blue-400"
      >
        <li>
          <a
            href="#sobre-mi"
            class="hover:text-blue-400 transition-colors duration-150"
          >
            Sobre mí
          </a>
        </li>
        <li>
          <a
            href="#experiencia"
            class="hover:text-blue-400 transition-colors duration-150"
          >
            Experiencia
          </a>
        </li>
        <li>
          <a
            href="#proyectos"
            class="hover:text-blue-400 transition-colors duration-150"
          >
            Proyectos
          </a>
        </li>
        <li>
          <a
            href="#contacto"
            class="hover:text-blue-400 transition-colors duration-150"
          >
            Contacto
          </a>
        </li>
      </ol>

      <CvButton />
    </nav>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  userName?: string;
}>();

import { ref, onMounted, onUnmounted } from "vue";
import CvButton from "../ui/CvButton.vue";

const showHeader = ref(true);
let lastScroll = 0;
const delta = 10;

const onScroll = () => {
  const current = window.scrollY;

  if (current <= 50) {
    showHeader.value = true;
    lastScroll = current;
    return;
  }

  const diff = current - lastScroll;

  if (Math.abs(diff) <= delta) return;

  if (diff > 0) {
    showHeader.value = false;
  } else if (diff < 0) {
    showHeader.value = true;
  }

  lastScroll = current;
};

onMounted(() => window.addEventListener("scroll", onScroll, { passive: true }));
onUnmounted(() => window.removeEventListener("scroll", onScroll));
</script>

<style>
header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 50;
  transition: transform 0.3s ease;
}

.hidden-header {
  transform: translateY(-100%);
}
</style>
