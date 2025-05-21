<template>
    <div
        class="w-[80px] h-[80px] md:w-[120px] md:h-[120px] text-center flex flex-col justify-end"
    >
        <img
            :src="props.src"
            :alt="props.name"
            class="p-2"
            style="height: 100%; width: auto; object-fit: contain; object-position: center;"
        >
        <p>{{ props.name }}</p>
    </div>
</template>

<script setup>
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});
</script>