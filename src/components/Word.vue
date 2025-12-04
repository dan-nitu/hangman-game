<script setup>
import { defineProps, computed } from 'vue'
import { useGameStore } from '@/stores/game'

import WordLetter from './WordLetter.vue'

const game = useGameStore()

const { word } = defineProps({
  word: {
    type: String,
    required: true,
  },
})

const normalizedWords = computed(
  () =>
    word
      .toLowerCase()
      .replace(/[^a-z ]/g, '') // keep letters + spaces
      .split(' ') // split into words
      .filter((w) => w.length) // remove double-spaces
      .map((w) => w.split('')), // split each word into letters
)
</script>

<template>
  <div class="word">
    <div class="word-wrapper" v-for="(wordLetters, index) in normalizedWords" :key="index">
      <WordLetter
        v-for="(letter, index) in wordLetters"
        :key="index"
        :letter="letter"
        :revealed="game.guessedLetters.includes(letter)"
      />
    </div>
  </div>

  {{ word }} - {{ game.guessedLetters }} - {{ normalizedWords }}
</template>
