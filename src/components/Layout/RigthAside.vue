<template lang="">
  <aside v-if="email" class="fixed right-5 bottom-1 z-50">
    <div class="flex items-center gap-2">
      <a
        :href="`mailto:${email}`"
        class="text-sm font-medium relative right-5 bottom-18 text-neutral-200 hover:text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 transition-all duration-500 rotate-90 origin-bottom-right"
      >
        {{ email }}
      </a>
      <span
        class="block w-px h-20 relative right-5 bottom-0 bg-blue-400"
      ></span>
    </div>
  </aside>
</template>
<script setup lang="ts">
defineProps<{
  email?: string;
}>();
</script>
