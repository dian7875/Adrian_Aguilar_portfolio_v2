<template>
  <div
    v-if="projects && projects.meta.total > 0"
    class="w-full flex justify-center flex-col items-center gap-4"
  >
    <h3 class="text-2xl font-semibold text-neutral-10">Otros proyectos</h3>
    <div class="grid grid-cols-3 w-full gap-6 max-md:grid-cols-1 max-md:p-3">
      <OtherProjectCard
        v-for="(item, index) in projects?.data"
        :key="index"
        :project="item"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import type { ApiResponseType } from "../../Types/ApiResponseType";
import type { ProjectType } from "../../Types";
import { portfolioService } from "../../services/portfolioService";
import OtherProjectCard from "./OtherProjectCard.vue";

const { data: projects } = useQuery<ApiResponseType<ProjectType[]>>({
  queryKey: ["projects"],
  queryFn: () =>
    portfolioService.getProjects({
      limit: 6,
      page: 1,
      hidden: false,
      highlight: false,
    }),
  retry: false,
  staleTime: Infinity,
  refetchOnWindowFocus: false,
});
</script>
