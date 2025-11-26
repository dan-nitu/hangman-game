<script setup>
import { defineProps, computed } from 'vue'
import WordLetter from './WordLetter.vue'

const { word, guessedLetters } = defineProps({
  word: {
    type: String,
    required: true,
  },
  guessedLetters: {
    type: Array,
    default: [],
  },
})

const normalizedWord = computed(
  () => word.toLowerCase().replace(/[^a-z]/g, ''), // remove anything that's not a–z
)
</script>

<template>
  <div class="word">
    <WordLetter
      v-for="(letter, index) in normalizedWord.split('')"
      :key="index"
      :letter="letter"
      :revealed="guessedLetters.includes(letter)"
    />
    {{ word }} - {{ guessedLetters }} - {{ normalizedWord }}
  </div>
</template>
