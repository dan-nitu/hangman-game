<script setup>
import { defineProps } from 'vue'
import WordLetter from './WordLetter.vue'

defineProps({
  word: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="word">
    {{ word }}
    <WordLetter letter="a" :revealed="false" />
    <WordLetter letter="a" :revealed="true" />
  </div>
</template>
