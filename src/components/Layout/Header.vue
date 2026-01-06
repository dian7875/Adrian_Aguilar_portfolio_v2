<template>
  <header
    v-show="showHeader"
    class="flex items-center justify-between w-full px-10 py-5"
  >
    <span class="font-mono text-sm text-neutral-200">
      &lt; {{ userName }} /&gt;
      <span class="text-blue-400">_</span>
    </span>

    <nav class="flex items-center gap-8">
      <ol
        class="flex gap-8 text-sm font-normal list-decimal text-neutral-300 marker:text-blue-400"
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
            href="#trabajos"
            class="hover:text-blue-400 transition-colors duration-150"
          >
            Trabajos
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

      <div class="relative inline-block">
        <div
          ref="trail"
          class="absolute inset-0 rounded-lg bg-blue-400/20 pointer-events-none"
        />

        <button
          v-if="cvUrl"
          ref="btn"
          class="relative cursor-pointer rounded-lg border px-4 py-2 text-sm font-medium bg-neutral-900 border-neutral-700 text-neutral-200 hover:border-blue-400 hover:text-blue-400 transition-all duration-200 hover:scale-[1.02]"
        >
          <a :href="cvUrl" target="_blank" rel="noopener noreferrer">
            Ver CV
          </a>
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  cvUrl?: string;
  userName?: string;
}>();

import { onMounted, onUnmounted, ref } from "vue";

const showHeader = ref(true);
let lastScroll = 0;

const onScroll = () => {
  const current = window.scrollY;

  if (current < lastScroll) {
    showHeader.value = true;
  } else {
    showHeader.value = false;
  }

  lastScroll = current;
};

onMounted(() => window.addEventListener("scroll", onScroll));
onUnmounted(() => window.removeEventListener("scroll", onScroll));
</script>
