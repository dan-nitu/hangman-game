<script setup>
import { defineProps } from 'vue'

defineProps({
  letter: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="letter-box">{{ letter }}</div>
</template>
