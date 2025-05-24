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

    <p class="text-center text-lg md:text-2xl my-10 hover:text-yellow-500 hover:underline">
      <a href="https://rxresu.me/cosmin.neaga91/software-engineer" target="_blank" rel="noopener noreferrer">Checkout my
        Resume</a>
    </p>

    <!-- TECHNOLOGIES -->
    <div class="flex flex-col gap-10">
      <div>
        <div class="flex items-center">
          <UIcon name="i-lucide-check" size="40" class="text-green-500 hidden md:block" mode="svg" />
          <span class="text-md md:text-xl text-center md:text-left">
            A few technologies and tools that I have been working with
            recently.</span>
        </div>
        <div class="flex flex-wrap justify-center items-stretch gap-10 mt-12">
          <CardSkill v-for="skill in skillsKnown" :key="skill.name"
            :src="`${config.public.baseUrl}/pics/tech-logo/${skill.url}`" :name="skill.name" />
        </div>
      </div>

      <div>
        <div class="flex items-center">
          <UIcon name="i-lucide-check" size="40" class="text-green-500 hidden md:block" mode="svg" />
          <span class="text-md md:text-xl text-center md:text-left">I have also studied and gained some work experience
            with the
            following.</span>
        </div>
        <div class="flex flex-wrap justify-center items-stretch gap-10 mt-12">
          <CardSkill v-for="skill in skillsTested" :key="skill.name"
            :src="`${config.public.baseUrl}/pics/tech-logo/${skill.url}`" :name="skill.name" />
        </div>
      </div>
    </div>
    <!-- TECHNOLOGIES -->

    <!-- PROJECTS -->
    <div class="my-20" id="projects">
      <h2 class="text-center text-2xl md:text-5xl py-10">
        <a href="#projects" class="hover:underline hover:text-yellow-500">Projects</a>
      </h2>
      <div class="flex flex-wrap justify-center gap-2">
        <CardWork v-for="work in workList" :key="work.title" :title="work.title" :imageUrl="work.img"
          :imageAlt="work.title" :description="work.description" :tags="work.tags" :technologies="work.technologies"
          :urlWeb="work.urlWeb" :urlGithub="work.urlGithub" :urlAndroid="work.urlAndroid" :urlIOS="work.urlIOS"
          :urlNpm="work.urlNpm" />
      </div>
    </div>
    <!-- PROJECTS -->

    <!-- ACHIEVEMENTS -->
    <div class="my-20" id="achievements">
      <h2 class="text-center text-2xl md:text-5xl py-10">
        <a href="#achievements" class="hover:underline hover:text-yellow-500">Achievements</a>
      </h2>

      <div class="flex flex-row flex-wrap justify-center gap-10 my-4">
        <div class="max-w-[600px] min-w-[340px]">
          <img :src="`${config.public.baseUrl}/pics/certification/degree/degree.png`" alt="University of Roehampton degree"
            class="w-[100%] h-auto" />
        </div>
        <div class="max-w-[600px] min-w-[340px]">
          <img :src="`${config.public.baseUrl}/pics/certification/degree/transcript-redacted_Page_1.png`" alt="University of Roehampton transcript"
            class="w-[100%] h-auto" />
        </div>
      </div>
      <div class="flex flex-row flex-wrap justify-center gap-10 my-4">
        <div class="max-w-[600px] min-w-[340px]">
          <img :src="`${config.public.baseUrl}/pics/certification/python/intro.png`" alt="Python introduction" class="w-[100%] h-auto" />
        </div>
        <div class="max-w-[600px] min-w-[340px]">
          <img :src="`${config.public.baseUrl}/pics/certification/python/functions.png`" alt="Python functions" class="w-[100%] h-auto" />
        </div>
      </div>
      <div class="flex flex-row flex-wrap justify-center gap-10 my-4">
        <div class="max-w-[600px] min-w-[340px]">
          <img :src="`${config.public.baseUrl}/pics/certification/python/datatypes.png`" alt="Python datatypes" class="w-[100%] h-auto" />
        </div>
        <div class="max-w-[600px] min-w-[340px]">
          <img :src="`${config.public.baseUrl}/pics/certification/python/datastructures.png`" alt="Python datastructures"
            class="w-[100%] h-auto" />
        </div>
      </div>
      <div class="flex flex-row flex-wrap justify-center gap-10 my-4">
        <div class="max-w-[600px] min-w-[340px]">
          <img :src="`${config.public.baseUrl}/pics/certification/python/oop.png`" alt="Python OOP" class="w-[100%] h-auto" />
        </div>
        <div class="max-w-[600px] min-w-[340px]">
          <img :src="`${config.public.baseUrl}/pics/certification/python/pandas.png`" alt="Python Pandas" class="w-[100%] h-auto" />
        </div>
      </div>
      <div class="flex flex-row flex-wrap justify-center gap-10 my-4">
        <div class="max-w-[600px] min-w-[340px]">
          <img :src="`${config.public.baseUrl}/pics/certification/css.png`" alt="CSS" class="w-[100%] h-auto" />
        </div>
        <div class="max-w-[600px] min-w-[340px]">
          <img :src="`${config.public.baseUrl}/pics/certification/html.png`" alt="HTML" class="w-[100%] h-auto" />
        </div>
      </div>
      <div class="flex flex-row flex-wrap justify-center gap-10 my-4">
        <div class="max-w-[600px] min-w-[340px]">
          <img :src="`${config.public.baseUrl}/pics/certification/js-udemy.png`" alt="JavaScript Udemy" class="w-[100%] h-auto" />
        </div>
        <div class="max-w-[600px] min-w-[340px]">
          <img :src="`${config.public.baseUrl}/pics/certification/js-sololearn.png`" alt="JavaScript SoloLearn" class="w-[100%] h-auto" />
        </div>
      </div>
      <div class="flex flex-row flex-wrap justify-center gap-10 my-4">
        <div class="max-w-[600px] min-w-[340px]">
          <img :src="`${config.public.baseUrl}/pics/certification/nodejs.png`" alt="Node.js" class="w-[100%] h-auto" />
        </div>
        <div class="max-w-[600px] min-w-[340px]">
          <img :src="`${config.public.baseUrl}/pics/certification/php.png`" alt="PHP" class="w-[100%] h-auto" />
        </div>
      </div>
    </div>
    <!-- ACHIEVEMENTS -->
  </div>
</template>
<script setup>
import { skillsKnown, skillsTested } from "assets/data/skills.js";
import { workList } from "assets/data/work.js";
const config = useRuntimeConfig();
</script>
