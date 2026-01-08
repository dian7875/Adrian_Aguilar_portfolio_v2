<template>
  <section
  id="sobre-mi"
    class="min-h-screen w-full justify-center px-10 py-20 text-white flex flex-col md:flex-row items-center gap-10"
  >
    <img
      v-if="basicInfo?.photoUrl"
      :src="basicInfo.photoUrl"
      :alt="basicInfo.name"
      class="w-[20dvw] rounded-full border-4 border-blue-400 object-cover"
    />
    <div class="max-w-2xl flex flex-col gap-6 text-center max-md:items-center">
      <BaseTitle title="01. Sobre mi" />
      <p class="text-neutral-300">
        {{ basicInfo?.bio }}
      </p>
      <div v-if="skills" class="flex flex-col gap-3">
        <p class="text-sm text-neutral-400">
          Algunas tecnologías que utilizo con mayor frecuencia:
        </p>

        <div class="flex flex-wrap gap-2">
          <BaseBadged
            v-for="(item, index) in skills.data"
            :key="index"
            :name="item.name"
          />
        </div>
      </div>

      <a
        href="#contactos"
        class="rounded-lg w-fit border px-4 py-2 text-sm font-medium bg-neutral-900 border-neutral-700 text-neutral-200 hover:border-blue-400 hover:text-blue-400 transition-all duration-200 hover:scale-[1.02]"
      >
        Contactos
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import { useBasicInfo } from "../../composables/useBasicInfo";
import { portfolioService } from "../../services/portfolioService";
import type { SkillsType } from "../../Types";
import type { ApiResponseType } from "../../Types/ApiResponseType";
import BaseTitle from "../ui/BaseTitle.vue";
import BaseBadged from "../ui/BaseBadged.vue";

const { basicInfo } = useBasicInfo();

const { data: skills } = useQuery<ApiResponseType<SkillsType[]>>({
  queryKey: ["Skills"],
  queryFn: () =>
    portfolioService.getSkills({ limit: 5, page: 1, hidden: false }),
  retry: false,
  staleTime: Infinity,
  refetchOnWindowFocus: false,
});
</script>
