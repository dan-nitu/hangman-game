<script setup>
import { defineProps } from 'vue'

defineProps({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="card">
    <div class="header">
      <span>{{ id }}</span>
      <h2>{{ title }}</h2>
    </div>
    <p>{{ description }}</p>
  </div>
</template>
