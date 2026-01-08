<template>
  <div class="min-h-screen flex flex-col relative">
    <Header :user-name="basicInfo?.name" />
    <LeftAside class="max-sm:hidden" />
    <RigthAside class="max-sm:hidden" :email="basicInfo?.email" />

    <main class="flex-1 flex flex-col items-center w-full">
      <Hero />
      <About/>
      <Experiences/>
      <Projects/>
      <Contacts />
    </main>
    <Footer />
  </div>
</template>
<script setup lang="ts">
import Footer from "./Footer.vue";
import Header from "./Header.vue";
import LeftAside from "./LeftAside.vue";
import RigthAside from "./RigthAside.vue";
import About from "../sections/About.vue";
import Hero from "../sections/Hero.vue";
import Experiences from "../sections/Experiences.vue";
import Projects from "../sections/Projects.vue";
import Contacts from "../sections/Contacts.vue";
import { useBasicInfo } from "../../composables/useBasicInfo";

const { basicInfo } = useBasicInfo();
</script>
