<script setup>
import { defineProps } from 'vue'

defineProps({
  gameCategory: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div>gameCategory: {{ gameCategory }}</div>
</template>
