<template>
  <aside
    class="fixed flex flex-col items-center gap-4 z-50 left-5 bottom-1 transform text-neutral-200"
  >
    <div class="flex flex-col gap-5">
      <a
        v-if="wa"
        :href="wa?.redirectLink"
        target="_blank"
        class="hover:text-green-400 transition-colors"
      >
        <i class="text-2xl pi pi-whatsapp"></i>
      </a>
      <a
        v-if="github"
        :href="github?.redirectLink"
        target="_blank"
        class="hover:text-blue-400 transition-colors"
      >
        <i class="text-2xl pi pi-github"></i>
      </a>
      <a
        v-if="fb"
        :href="fb?.redirectLink"
        target="_blank"
        class="hover:text-blue-400 transition-colors"
        ><i class="text-2xl pi pi-facebook"></i
      ></a>
      <a
        v-if="ln"
        :href="ln?.redirectLink"
        target="_blank"
        class="hover:text-blue-400 transition-colors"
        ><i class="text-2xl pi pi-linkedin"></i
      ></a>
    </div>
    <span class="block w-px h-20 relative bottom-0 bg-blue-400"></span>
  </aside>
</template>

<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import type { SocialNetworkRefType } from "../../Types";
import { portfolioService } from "../../services/portfolioService";

const { data: fb } = useQuery<SocialNetworkRefType>({
  queryKey: ["Fb-info"],
  queryFn: () => portfolioService.getSocialNetwork("Facebook"),
  retry: false,
  staleTime: Infinity,
  refetchOnWindowFocus: false,
});
const { data: github } = useQuery<SocialNetworkRefType>({
  queryKey: ["Gh-info"],
  queryFn: () => portfolioService.getSocialNetwork("Github"),
  retry: false,
  staleTime: Infinity,
  refetchOnWindowFocus: false,
});
const { data: ln } = useQuery<SocialNetworkRefType>({
  queryKey: ["Ln-info"],
  queryFn: () => portfolioService.getSocialNetwork("Linkedin"),
  retry: false,
  staleTime: Infinity,
  refetchOnWindowFocus: false,
});
const { data: wa } = useQuery<SocialNetworkRefType>({
  queryKey: ["Wa-info"],
  queryFn: () => portfolioService.getSocialNetwork("Whatsapp"),
  retry: false,
  staleTime: Infinity,
  refetchOnWindowFocus: false,
});
</script>
