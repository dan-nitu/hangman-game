<script setup>
import { defineProps } from 'vue'

defineProps({
  letter: {
    type: String,
    required: true,
    validator: (value) => value.length === 1,
  },
  revealed: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div :class="`word-letter ${letter === ' ' ? 'space' : ''}`">{{ revealed ? letter : '' }}</div>
</template>
