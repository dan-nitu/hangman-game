<script setup>
import { useGameStore } from '@/stores/game'

import Header from '../Header.vue'
import Health from '../Health.vue'

import Word from '../Word.vue'
import Keyboard from '../Keyboard.vue'

import GamePopup from '../GamePopup.vue'

const game = useGameStore()
</script>

<template>
  <div class="game-screen">
    <div class="header-wrapper">
      <Header :title="game.category" :game="true" />
      <Health />
    </div>
    <div class="game">
      <Word />
      <Keyboard />
    </div>
  </div>

  <GamePopup v-if="game.gameStatus" />
</template>
