<script setup>
import { defineProps } from 'vue'
import Button from './Button.vue'

defineProps({
  title: {
    type: String,
    required: true,
  },
  game: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <header>
    <Button v-if="game" variant="menu" />
    <Button v-else="game" variant="back" changeState="main-menu" />
    <h1>{{ title }}</h1>
  </header>
</template>
