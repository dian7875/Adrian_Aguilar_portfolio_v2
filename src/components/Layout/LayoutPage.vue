<template>
  <div class="min-h-screen flex flex-col relative">
    <Header :user-name="basicInfo?.name" :cv-url="basicInfo?.cvUrl" />
    <LeftAside />
    <RigthAside :email="basicInfo?.email" />

    <main class="flex-1">
      <slot />
    </main>
    <Footer />
  </div>
</template>
<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import Footer from "./Footer.vue";
import Header from "./Header.vue";
import LeftAside from "./LeftAside.vue";
import RigthAside from "./RigthAside.vue";
import { portfolioService } from "../../services/portfolioService";
import type { UserType } from "../../Types";

const { data: basicInfo } = useQuery<UserType>({
  queryKey: ["basic-info"],
  queryFn: portfolioService.getUser,
  retry: false,
  staleTime: Infinity,
  refetchOnWindowFocus: false,
});
</script>
