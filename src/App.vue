<script setup>
import { ref, provide } from 'vue'

import MainMenuScreen from './components/screens/MainMenuScreen.vue'
import HowToPlayScreen from './components/screens/HowToPlayScreen.vue'
import PickACategoryScreen from './components/screens/PickACategoryScreen.vue'
import GameScreen from './components/screens/GameScreen.vue'

const screenState = ref('main-menu')
provide('screenState', screenState)

const gameCategory = ref('')
provide('gameCategory', gameCategory)

screenState.value = 'how-to-play'
screenState.value = 'pick-a-category'
</script>

<template>
  <MainMenuScreen v-if="screenState === 'main-menu'" />
  <HowToPlayScreen v-if="screenState === 'how-to-play'" />
  <PickACategoryScreen v-if="screenState === 'pick-a-category'" />
  <GameScreen v-if="screenState === 'game'" :gameCategory="gameCategory" />
</template>
