<template>
    <UApp>
        <NuxtLayout name="navigation" />
        <div 
            class="max-w-[1600px] m-auto p-2 md:p-6" 
            style="margin: auto; margin-top: 8px; margin-bottom: 8px;"
        >
            <NuxtPage />
        </div>
        <NuxtLayout name="footer" />
    </UApp>
</template>