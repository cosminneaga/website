<template>
  <div>
    <!-- HERO -->
    <div class="text-center">
      <h1 class="gradient-text text-4xl md:text-7xl">Hi, I'm Cosmin.</h1>
      <h2 class="text-2xl md:text-4xl my-12">
        I am a <span class="gradient-text">Software Engineer</span> who has
        embarked on a <span class="gradient-text">continuous journey</span>
        of building software solutions using a variety of
        <span class="gradient-text">programming languages</span> and
        <span class="gradient-text">technologies</span>.
      </h2>
    </div>
    <!-- HERO -->

    <!-- TECHNOLOGIES -->
    <div class="flex flex-col gap-10">
      <div>
        <div class="flex items-center">
          <UIcon
            name="i-lucide-check"
            size="40"
            class="text-green-500 hidden md:block"
            mode="svg"
          />
          <span class="text-md md:text-xl text-center md:text-left">
            A few technologies and tools that I have been working with
            recently.</span
          >
        </div>
        <div class="flex flex-wrap justify-center items-stretch gap-10 mt-12">
          <CardSkill
            v-for="skill in skillsKnown"
            :key="skill.name"
            :src="`${config.public.baseUrl}/pics/tech-logo/${skill.url}`"
            :name="skill.name"
          />
        </div>
      </div>

      <div>
        <div class="flex items-center">
          <UIcon
            name="i-lucide-check"
            size="40"
            class="text-green-500 hidden md:block"
            mode="svg"
          />
          <span class="text-md md:text-xl text-center md:text-left"
            >I have also studied and gained some work experience with the
            following.</span
          >
        </div>
        <div class="flex flex-wrap justify-center items-stretch gap-10 mt-12">
          <CardSkill
            v-for="skill in skillsTested"
            :key="skill.name"
            :src="`${config.public.baseUrl}/pics/tech-logo/${skill.url}`"
            :name="skill.name"
          />
        </div>
      </div>
    </div>
    <!-- TECHNOLOGIES -->

    <!-- PROJECTS -->
    <div class="my-20">
      <h2 class="text-center text-2xl md:text-5xl">Projects</h2>
      <div class="flex flex-wrap justify-center gap-2 mt-10">
        <CardWork 
          v-for="work in workList"
          :key="work.title"
          :title="work.title"
          :imageUrl="work.img"
          :description="work.description"
          :tags="work.tags"
          :technologies="work.technologies"
          :urlWeb="work.urlWeb"
          :urlGithub="work.urlGithub"
          :urlAndroid="work.urlAndroid"
          :urlIOS="work.urlIOS"
          :urlNpm="work.urlNpm"
        />
      </div>
    </div>
    <!-- PROJECTS -->
  </div>
</template>
<script setup>
import { skillsKnown, skillsTested } from "assets/data/skills.js";
import { workList } from "assets/data/work.js";
const config = useRuntimeConfig();
</script>
