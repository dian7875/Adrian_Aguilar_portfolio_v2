<template>
  <footer
    class="w-full py-6 text-white flex flex-col items-center justify-center"
  >
    <div class="text-sm font-medium cursor-default">Adrian Aguilar D.</div>

    <div class="flex gap-4 mt-2">
      <a
        :href="github?.redirectLink"
        target="_blank"
        class="hover:text-blue-400 transition-colors"
      >
        GitHub
      </a>
      <a
        :href="fb?.redirectLink"
        target="_blank"
        class="hover:text-blue-400 transition-colors"
      >
        Facebook
      </a>
      <a
        :href="ln?.redirectLink"
        target="_blank"
        class="hover:text-blue-400 transition-colors"
      >
        LinkedIn
      </a>
    </div>

    <div class="text-xs text-neutral-400 mt-2 cursor-default">
      © {{ new Date().getFullYear() }} Adrian Aguilar D. Todos los derechos
      reservados.
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import { portfolioService } from "../../services/portfolioService";
import type { SocialNetworkRefType } from "../../Types";

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
</script>
