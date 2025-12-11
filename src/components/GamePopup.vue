<script setup>
import { useGameStore } from '@/stores/game'

import Button from './Button.vue'

const game = useGameStore()

const handleGameStatus = () => {
  if (game.gameStatus === 'Paused') {
    game.resetGameStatus()
  } else {
    game.resetWord()
  }
}

const handleResetGame = () => {
  game.resetGame()
}
</script>

<template>
  <div class="game-popup">
    <div class="wrapper">
      <h3>{{ game.gameStatus }}</h3>

      <div class="button-container">
        <Button variant="primary" @click="handleGameStatus">
          {{ game.gameStatus === 'Paused' ? 'Continue' : 'Play Again' }}
        </Button>
        <Button variant="primary" changeState="pick-a-category" @click="handleResetGame">
          New Category
        </Button>
        <Button variant="secondary" changeState="main-menu" @click="handleResetGame">
          Quit Game
        </Button>
      </div>
    </div>
  </div>
</template>
