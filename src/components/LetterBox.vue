<script setup>
import { useGameStore } from '@/stores/game'
import { defineProps, ref, watch, onMounted, onUnmounted } from 'vue'

const game = useGameStore()

const { letter } = defineProps({
  letter: {
    type: String,
    required: true,
  },
})

const isActive = ref(true)

const activateLetter = () => {
  if (!isActive.value) return
  isActive.value = false
  game.checkLetter(letter)
  game.checkWin()
}

const letterClick = () => activateLetter()

const handleKey = (e) => {
  if (e.key.toLowerCase() === letter.toLowerCase() && !game.gameStatus) {
    activateLetter()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKey)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKey)
})

// reset
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
  <button tabindex="-1" class="letter-box" :disabled="!isActive" @click="letterClick">
    {{ letter }}
  </button>
</template>
