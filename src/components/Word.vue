<script setup>
import { useGameStore } from '@/stores/game'

import WordLetter from './WordLetter.vue'

const game = useGameStore()
</script>

<template>
  <div class="word">
    <div class="word-wrapper" v-for="(wordLetters, index) in game.normalizeWord" :key="index">
      <WordLetter
        v-for="(letter, index) in wordLetters"
        :key="index"
        :letter="letter"
        :revealed="game.guessedLetters.includes(letter)"
      />
    </div>
  </div>
</template>
