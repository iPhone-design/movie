<script setup>
import TheHeader from "@/components/common/TheHeader.vue";
import TheFooter from "@/components/common/TheFooter.vue";
</script>

<template>
  <TheHeader />
  <slot />
  <TheFooter />
</template>
