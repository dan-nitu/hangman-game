<script setup>
import { useGameStore } from '@/stores/game'

import MainMenuScreen from './components/screens/MainMenuScreen.vue'
import HowToPlayScreen from './components/screens/HowToPlayScreen.vue'
import PickACategoryScreen from './components/screens/PickACategoryScreen.vue'
import GameScreen from './components/screens/GameScreen.vue'

const game = useGameStore()
</script>

<template>
  <MainMenuScreen v-if="game.screen === 'main-menu'" />
  <HowToPlayScreen v-if="game.screen === 'how-to-play'" />
  <PickACategoryScreen v-if="game.screen === 'pick-a-category'" />
  <GameScreen v-if="game.screen === 'game'" />
</template>
