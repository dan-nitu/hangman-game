<script setup>
import { defineProps, ref } from 'vue'
import data from '@/data/data.json'

import Header from '../Header.vue'
import Health from '../Health.vue'

const { gameCategory } = defineProps({
  gameCategory: {
    type: String,
    required: true,
  },
})

const livesNumber = ref(8)
const wordsPool = ref(data)
const randomWord = ref(null)

const categoryArray = wordsPool.value[gameCategory]

if (categoryArray && categoryArray.length > 0) {
  const availableWords = categoryArray.filter((word) => !word.selected)

  if (availableWords.length > 0) {
    randomWord.value = availableWords[Math.floor(Math.random() * availableWords.length)]

    const index = categoryArray.indexOf(randomWord.value)
    if (index !== -1) {
      categoryArray[index].selected = true
    }
  } else {
    console.warn(`All words in category "${gameCategory}" have been used.`)
  }
} else {
  console.error(`Category "${gameCategory}" does not exist.`)
}
</script>

<template>
  <div class="game-screen">
    <div class="header-wrapper">
      <Header :title="gameCategory" :game="true" />
      <Health :livesNumber="livesNumber" />
    </div>
    <p>Random word: {{ randomWord?.name }}</p>
  </div>
</template>
