<script setup>
import { RouterView } from "vue-router";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
</script>

<template>
  <DefaultLayout>
    <RouterView :key="$route.fullPath" />
  </DefaultLayout>
</template>
