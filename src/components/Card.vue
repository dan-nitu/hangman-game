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
    <span>{{ id < 10 ? '0' + id : id }}</span>
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
  </div>
</template>
