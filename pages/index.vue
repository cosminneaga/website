<template>
  <div class="text-center">
    <h1 class="gradient-text text-4xl md:text-7xl">Hi, I'm Cosmin.</h1>
    <h2 class="text-2xl md:text-4xl my-4 md:my-12">
      I am a <span class="gradient-text">Software Engineer</span> who has
      embarked on a <span class="gradient-text">continuous journey</span>
      of building software solutions using a variety of
      <span class="gradient-text">programming languages</span> and
      <span class="gradient-text">technologies</span>.
    </h2>
  </div>

  <div class="flex flex-col gap-10">
    <div>
      <div class="flex items-center">
        <UIcon
          name="i-lucide-check"
          size="40"
          class="text-green-500"
          mode="svg"
        />
        <span class="text-xl"
          >A few technologies and tools that I have been working with
          recently.</span
        >
      </div>
      <div class="flex flex-wrap justify-center items-stretch gap-10 mt-4">
        <div 
            v-for="skill in skillsKnown" 
            :key="skill.name" 
            class="w-[120px] text-center flex flex-col justify-end"
        >
          <NuxtImg
            :src="`/pics/tech-logo/${skill.url}`"
            :alt="skill.name"
            class="m-2"
            width="100"
            height="100"
            fit="outside"
          />
          <p>{{ skill.name }}</p>
        </div>
      </div>
    </div>

    <div>
      <div class="flex items-center">
        <UIcon
          name="i-lucide-check"
          size="40"
          class="text-green-500"
          mode="svg"
        />
        <span class="text-xl"
          >I have also studied and gained some work experience with the
          following.</span
        >
      </div>
      <div class="flex flex-wrap justify-center items-stretch gap-10 mt-4">
        <div 
            v-for="skill in skillsTested" 
            :key="skill.name" 
            class="w-[120px] text-center flex flex-col justify-end"
        >
          <NuxtImg
            :src="`/pics/tech-logo/${skill.url}`"
            :alt="skill.name"
            class="m-2"
            width="100"
            height="100"
            fit="outside"
          />
          <p>{{ skill.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { skillsKnown, skillsTested } from "assets/data/skills.js";

export default {
  data() {
    return {
      skillsKnown,
      skillsTested,
    };
  },
};
</script>
