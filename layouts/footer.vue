<template>
    <div class="bg-black p-4">
        <div class="max-w-[1200px] flex justify-between" style="margin: auto;">
            <div class="flex gap-4">
                <UIcon name="i-lucide-github" size="30" />
                <UIcon name="i-lucide-twitter" size="30" />
                <UIcon name="i-lucide-linkedin" size="30" />
            </div>
            <div>
                <p>© {{ currentYear }} Cosmin Neaga</p>
            </div>
        </div>
    </div>
</template>
<script>
import dayjs from 'dayjs';
export default {
    computed: {
        currentYear() {
            return new dayjs().format('YYYY');
        }
    },
}

</script>