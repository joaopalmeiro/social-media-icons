<script setup>
defineProps({
    svgRaw: {
        type: String,
        required: true
    },
})
</script>

<template>
    <i v-html="svgRaw" />
</template>
