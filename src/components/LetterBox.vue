<script setup>
import { useGameStore } from '@/stores/game'
import { defineProps, ref, watch } from 'vue'

const game = useGameStore()

const { letter } = defineProps({
  letter: {
    type: String,
    required: true,
  },
})

const isActive = ref(true)

const letterClick = () => {
  isActive.value = false
  game.checkLetter(letter)
  game.checkWin()
}

watch(
  () => game.guessedLetters,
  (newVal) => {
    if (newVal.length === 0) {
      isActive.value = true
    }
  },
  { deep: true },
)
</script>

<template>
  <button class="letter-box" :disabled="!isActive" @click="letterClick">
    {{ letter }}
  </button>
</template>
