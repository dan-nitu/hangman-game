<script setup>
import { defineProps } from 'vue'

defineProps({
  letter: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    default: true,
  },
})
</script>

<template>
  <button class="letter-box" :disabled="!active">{{ letter }}</button>
</template>
