<script setup>
import { useGameStore } from '@/stores/game'

import Button from './Button.vue'

const game = useGameStore()
</script>

<template>
  <div class="game-popup">
    <div class="wrapper">
      <h3>{{ game.gameStatus }}</h3>

      <div class="button-container">
        <Button variant="primary">Play Again</Button>
        <Button variant="primary" changeState="pick-a-category">New Category</Button>
        <Button variant="secondary" changeState="main-menu">Quit Game</Button>
      </div>
    </div>
  </div>
</template>
