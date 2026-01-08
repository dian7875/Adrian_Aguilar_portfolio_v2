<template>
  <div v-if="visible" class="loader">
    <h2 ref="textRef" class="name">Adrian Aguilar D.</h2>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, onBeforeUnmount } from "vue";
import { animate, stagger, splitText } from "animejs";

const visible = ref(true);
const textRef = ref<HTMLElement | null>(null);

const lockScroll = () => {
  document.body.style.overflow = "hidden";
};

const unlockScroll = () => {
  document.body.style.overflow = "";
};

watch(visible, (isVisible) => {
  isVisible ? lockScroll() : unlockScroll();
});

onMounted(() => {
  lockScroll();

  if (!textRef.value) return;

  const { chars } = splitText(textRef.value, {
    words: false,
    chars: true,
  });

  animate(chars, {
    y: [
      { to: "-2.75rem", ease: "outExpo", duration: 600 },
      { to: "0rem", ease: "outBounce", duration: 800, delay: 100 },
    ],
    rotate: {
      from: "-1turn",
      delay: 0,
    },
    delay: stagger(50),
    ease: "inOutCirc",
    loopDelay: 1000,
    loop: true,
  });
});

onBeforeUnmount(() => {
  unlockScroll();
});

const hide = () => {
  visible.value = false;
};

defineExpose({ hide });
</script>

<style scoped>
.loader {
  position: fixed;
  inset: 0;
  background: #000000;
  display: grid;
  place-items: center;
  z-index: 9999;
}

.name {
  font-size: clamp(2.25rem, 5vw, 3.5rem);
  font-weight: 600;
  letter-spacing: 0.12em;
  color: #e5e7eb;
  white-space: nowrap;
}
</style>
