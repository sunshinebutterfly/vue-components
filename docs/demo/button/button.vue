<script setup lang="ts">
import Button from '@/components/button/button.vue'
import {Loading, Search } from '@element-plus/icons-vue'
</script>

<template>
    <Button> hello </Button>
    <Button plain type="primary" :icon="Search">primary button</Button>
    <Button type="success">success button</Button>
    <Button type="success" :icon="Loading">success button</Button>
</template>