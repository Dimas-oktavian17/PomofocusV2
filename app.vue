<script setup>
import { useclass } from './composables/style/class';
const useClass = useclass().bgTheme
</script>
<template>
    <div :class="useClass" class="grid h-screen grid-cols-1 place-items-center">
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>
