<script setup>
import { defineProps } from 'vue'
import Button from './Button.vue'

defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <header>
    <Button variant="back" changeState="main-menu" />
    <h1>{{ title }}</h1>
  </header>
</template>
