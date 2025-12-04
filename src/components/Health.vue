<script setup>
import { useGameStore } from '@/stores/game'

const game = useGameStore()
</script>

<template>
  <div class="health">
    <div class="healthbar">
      <div :class="`healthbar-fill lives-${game.lives}`"></div>
    </div>
    <img src="../assets/images/icon-heart.svg" alt="heart-icon" />
  </div>
</template>
