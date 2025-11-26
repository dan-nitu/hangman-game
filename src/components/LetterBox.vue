<script setup>
import { defineProps, ref } from 'vue'

const { letter } = defineProps({
  letter: {
    type: String,
    required: true,
  },
})

const isActive = ref(true)
const emit = defineEmits(['pressed'])

const handleClick = () => {
  isActive.value = false
  emit('pressed', letter)
}
</script>

<template>
  <button class="letter-box" :disabled="!isActive" @click="handleClick">
    {{ letter }}
  </button>
</template>
