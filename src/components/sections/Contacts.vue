<template>
  <section
    id="contacto"
    class="min-h-screen flex flex-col items-center justify-center px-6 text-center"
  >
    <BaseTitle title="¿Hablamos?" />

    <p class="max-w-xl text-neutral-300 mb-10 leading-relaxed">
      Actualmente estoy abierto a nuevas oportunidades, colaboraciones o
      proyectos interesantes. Si tienes una idea o simplemente quieres saludar,
      estaré encantado de leerte.
    </p>

    <div class="flex flex-col sm:flex-row gap-4">
      <a
        v-if="whatsappLink"
        :href="whatsappLink"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 rounded-lg border border-blue-400 px-6 py-3 text-sm font-medium text-blue-400 hover:bg-blue-400/10 transition-colors"
      >
        <i class="pi pi-whatsapp text-lg"></i>
        Escríbeme por WhatsApp
      </a>

      <a
        v-if="basicInfo?.email"
        :href="`mailto:${basicInfo.email}`"
        class="inline-flex items-center gap-2 rounded-lg border border-neutral-700 px-6 py-3 text-sm font-medium text-neutral-200 hover:border-blue-400 hover:text-blue-400 transition-colors"
      >
        <i class="pi pi-envelope text-lg"></i>
        Enviar correo
      </a>
    </div>

    <p class="mt-12 text-xs text-neutral-500">
      Respondo normalmente en menos de 24 horas.
    </p>
    <div class="pt-8">
      <p class="text-sm text-neutral-400 mb-4">También puedes encontrarme en</p>

      <ol class="flex flex-wrap gap-4">
        <li v-for="(item, index) in uniqueNetworks" :key="index">
          <a
            :href="item.redirectLink"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm font-medium text-neutral-300 hover:text-blue-400 transition-colors inline-flex items-center gap-1"
          >
            {{ item.name }}
            <span class="text-blue-400/60">↗</span>
          </a>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useBasicInfo } from "../../composables/useBasicInfo";
import BaseTitle from "../ui/BaseTitle.vue";
import { useQuery } from "@tanstack/vue-query";
import { portfolioService } from "../../services/portfolioService";
import type { SocialNetworkRefType } from "../../Types";
import type { ApiResponseType } from "../../Types/ApiResponseType";

const { basicInfo } = useBasicInfo();

const whatsappLink = computed(() => {
  if (!basicInfo.value?.phone) return null;

  const phone = basicInfo.value.phone.replace(/\D/g, "");
  const message = "Hola Adrian, vi tu portfolio y me gustaría contactarte.";

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
});

const { data: networks } = useQuery<ApiResponseType<SocialNetworkRefType[]>>({
  queryKey: ["networks"],
  queryFn: () =>
    portfolioService.getAllSocialNetwork({ page: 1, limit: 5, hidden: false }),
  retry: false,
  staleTime: Infinity,
  refetchOnWindowFocus: false,
});

const uniqueNetworks = computed(() => {
  if (!networks?.value?.data) return [];

  const seen = new Set<string>();

  return networks.value.data.filter((item) => {
    const key = item.name.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
});
</script>
