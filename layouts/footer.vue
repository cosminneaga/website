<template>
    <div class="bg-black p-4">
        <div class="max-w-[1200px] flex justify-between" style="margin: auto;">
            <div class="flex gap-4">
                
        <a href="https://github.com/cosminneaga" target="_blank" rel="noopener noreferrer" class="hover:text-yellow-500"><UIcon name="i-lucide-github" size="30" /></a>
        <a href="https://www.facebook.com/CosminRazvanNeaga" target="_blank" rel="noopener noreferrer" class="hover:text-yellow-500"><UIcon name="i-lucide-facebook" size="30" /></a>
        <a href="https://www.linkedin.com/in/cosminneaga/" target="_blank" rel="noopener noreferrer" class="hover:text-yellow-500"><UIcon name="i-lucide-linkedin" size="30" /></a>
            </div>
            <div>
                <p>© {{ currentYear }} Cosmin Neaga</p>
            </div>
        </div>
    </div>
</template>
<script>
import dayjs from "dayjs";
export default {
  computed: {
    currentYear() {
      return new dayjs().format("YYYY");
    }
  },
}

</script>