<script setup lang="ts">
defineProps<{
    svgRaw: string
}>()
</script>

<template>
    <i v-html="svgRaw" />
</template>
