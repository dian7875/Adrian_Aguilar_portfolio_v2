<template>
  <div v-if="projects && projects.meta.total>0" class="w-full flex justify-center flex-col items-center gap-4">
    <h3 class="text-2xl font-semibold text-neutral-100">
      Proyectos destacados
    </h3>

    <div class="flex flex-col gap-5 max-md:gap-8 max-md:p-3">
      <HighLightedProjectCard
        v-for="(item, index) in projects?.data"
        :key="index"
        :project="item"
        :reverse="index % 2 !== 0"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import { portfolioService } from "../../services/portfolioService";
import type { ProjectType } from "../../Types";
import type { ApiResponseType } from "../../Types/ApiResponseType";
import HighLightedProjectCard from "./HighLightedProjectCard.vue";

const { data: projects } = useQuery<ApiResponseType<ProjectType[]>>({
  queryKey: ["highligth-projects"],
  queryFn: () =>
    portfolioService.getProjects({
      limit: 5,
      page: 1,
      hidden: false,
      highlight: true,
    }),
  retry: false,
  staleTime: Infinity,
  refetchOnWindowFocus: false,
});
</script>
