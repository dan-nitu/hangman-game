<script setup>
import { ref } from 'vue'
import { useGameStore } from '@/stores/game'
import data from '@/data/data.json'

import Header from '../Header.vue'
import Health from '../Health.vue'

import Word from '../Word.vue'
import Keyboard from '../Keyboard.vue'

const game = useGameStore()

const wordsPool = ref(data)
const randomWord = ref(null)

const categoryArray = wordsPool.value[game.category]

if (categoryArray && categoryArray.length > 0) {
  const availableWords = categoryArray.filter((word) => !word.selected)

  if (availableWords.length > 0) {
    randomWord.value = availableWords[Math.floor(Math.random() * availableWords.length)]

    const index = categoryArray.indexOf(randomWord.value)
    if (index !== -1) {
      categoryArray[index].selected = true
    }
  } else {
    console.warn(`All words in category "${game.category}" have been used.`)
  }
} else {
  console.error(`Category "${game.category}" does not exist.`)
}
</script>

<template>
  <div class="game-screen">
    <div class="header-wrapper">
      <Header :title="game.category" :game="true" />
      <Health />
    </div>
    <div class="game">
      <Word :word="randomWord?.name" />
      <Keyboard />
    </div>
  </div>
</template>
