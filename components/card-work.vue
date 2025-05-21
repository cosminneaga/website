<template>
  <div class="bg-transparent min-w-[350px] max-w-[480px] rounded-xs m-4">
    <h4 class="text-xl text-yellow-400 font-bold">{{ props.title }}</h4>

    <div
      class="border-2 p-2"
      style="
        height: 100% !important;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: between;
      "
    >
      <div class="grow">
        <!-- logo -->
        <img
          :src="props.imageUrl"
          :alt="props.imageAlt"
          class="w-full h-48 object-contain"
        />

        <!-- description -->
        <p class="my-4">{{ props.description }}</p>
      </div>

      <div class="flex items-start">
        <!-- tags -->
        <div class="flex flex-wrap gap-2 w-[50%]">
          <span
            v-for="tag in tags"
            :key="tag"
            class="bg-yellow-400 text-black text-sm font-semibold px-2 py-1 rounded-xs"
          >
            {{ tag }}
          </span>
        </div>

        <!-- technology -->
        <div class="flex flex-wrap gap-2 w-[50%] justify-end">
          <UIcon
            v-for="technology in technologies"
            :key="technology"
            :name="`i-mdi-${technology}`"
            size="28"
            class="text-yellow-400"
            mode="svg"
          />
        </div>
      </div>

      <!-- url -->
      <div class="flex justify-end gap-2 mt-10">
        <a
          v-if="urlAndroid"
          :href="urlAndroid"
          target="_blank"
          rel="noopener noreferrer"
          class="p-1 border border-transparent hover:border-white rounded-t-md"
        >
          <UIcon name="i-mdi-android" size="28" class="text-white" mode="svg" />
        </a>
        <a
          v-if="urlIOS"
          :href="urlIOS"
          target="_blank"
          rel="noopener noreferrer"
          class="p-1 border border-transparent hover:border-white rounded-t-md"
        >
          <UIcon name="i-mdi-apple" size="28" class="text-white" mode="svg" />
        </a>
        <a
          v-if="urlGithub"
          :href="urlGithub"
          target="_blank"
          rel="noopener noreferrer"
          class="p-1 border border-transparent hover:border-white rounded-t-md"
        >
          <UIcon name="i-mdi-github" size="28" class="text-white" mode="svg" />
        </a>
        <a
          v-if="urlWeb"
          :href="urlWeb"
          target="_blank"
          rel="noopener noreferrer"
          class="p-1 border border-transparent hover:border-white rounded-t-md"
        >
          <UIcon name="i-mdi-globe" size="28" class="text-white" mode="svg" />
        </a>
        <a
          v-if="urlNpm"
          :href="urlNpm"
          target="_blank"
          rel="noopener noreferrer"
          class="p-1 border border-transparent hover:border-white rounded-t-md"
        >
          <UIcon name="i-mdi-npm" size="28" class="text-white" mode="svg" />
        </a>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  url: {
    type: [String, null],
    default: null,
  },
  urlAndroid: {
    type: [String, null],
    default: null,
  },
  urlIOS: {
    type: [String, null],
    default: null,
  },
  urlGithub: {
    type: [String, null],
    default: null,
  },
  urlWeb: {
    type: [String, null],
    default: null,
  },
  urlNpm: {
    type: [String, null],
    default: null,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  imageAlt: {
    type: String,
    required: true,
  },
  technologies: {
    type: Array,
    required: true,
  },
  tags: {
    type: Array,
    required: true,
  },
});
</script>
