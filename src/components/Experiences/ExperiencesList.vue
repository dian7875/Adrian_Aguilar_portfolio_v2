<template>
  <div class="w-full flex gap-10 max-md:flex-col ">
    <div class="w-2/4 max-md:w-full">
      <ol class="w-full flex flex-col border-l border-neutral-700 max-md:flex-row max-md:overflow-x-scroll">
        <li
          v-for="item in workList?.data"
          :key="item.id"
          @click="selectWork(item)"
          class="cursor-pointer px-4 py-3 transition-colors"
          :class="
            selectedWork?.id === item.id
              ? 'border-l-2 border-blue-400 text-blue-400 bg-blue-400/10'
              : 'border-l-2 border-transparent text-neutral-400 hover:text-white'
          "
        >
          {{ item.company }}
        </li>
      </ol>
    </div>

    <div class="w-3/4" v-if="selectedWork">
      <h3 class="text-xl font-semibold text-white">
        {{ selectedWork.role }}
        <span class="text-blue-400">@ {{ selectedWork.company }}</span>
      </h3>

      <p class="text-neutral-300 mb-4">
        {{ CalPeriod(selectedWork.startDate, selectedWork.endDate) }}
      </p>
      <p class="text-neutral-300 mb-4">
        {{ selectedWork.description }}
      </p>

      <ul class="list-disc list-inside text-neutral-300 space-y-1">
        <li
          v-for="(item, i) in selectedWork.responsibilities"
          :key="i"
          class="list-none relative pl-5 before:absolute before:left-0 before:top-1 before:content-['▸'] before:text-blue-400 hover:text-white hover:before:text-white"
        >
          {{ item }}
        </li>
      </ul>
    </div>

    <div v-else-if="isPending" class="w-3/4 flex flex-col gap-3">
      <div class="h-6 w-2/3 bg-neutral-800 animate-pulse rounded" />
      <div class="h-4 w-1/3 bg-neutral-800 animate-pulse rounded" />
      <div class="h-4 w-full bg-neutral-800 animate-pulse rounded" />
      <div class="h-4 w-full bg-neutral-800 animate-pulse rounded" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import type { ApiResponseType } from "../../Types/ApiResponseType";
import type { ExperiencesType } from "../../Types";
import { portfolioService } from "../../services/portfolioService";
import { ref, watch } from "vue";
import { CalPeriod } from "../../utils/FormatDate";

const selectedWork = ref<ExperiencesType | null>(null);

const { data: workList, isPending } = useQuery<
  ApiResponseType<ExperiencesType[]>
>({
  queryKey: ["works", { page: 1, limit: 10, hidden: false }],
  queryFn: () =>
    portfolioService.getWorkExperiences({
      page: 1,
      limit: 10,
      hidden: false,
    }),
  retry: false,
  staleTime: Infinity,
  refetchOnWindowFocus: false,
});

watch(workList, (value) => {
  const first = value?.data?.find(Boolean);
  if (first) {
    selectedWork.value = first;
  }
});

const selectWork = (item: ExperiencesType) => {
  selectedWork.value = item;
};
</script>
