<template>
    <UCard class="grid max-w-sm grid-cols-1 border-none shadow-none place-items-center ring-0 bg-red-50">
        <template #header>
            <BaseStatusLabel />
        </template>
        <h1 class="font-normal text-red-950 text-9xl">2500</h1>
        <template #footer>
            <ButtonActions @update="console.log('update')" @tes="console.log('tes')" @check="console.log('cek')" />
        </template>
    </UCard>
</template>