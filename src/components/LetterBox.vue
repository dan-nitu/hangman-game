<script setup>
import { useGameStore } from '@/stores/game'
import { defineProps, ref } from 'vue'

const game = useGameStore()

const { letter } = defineProps({
  letter: {
    type: String,
    required: true,
  },
})

const isActive = ref(true)
const emit = defineEmits(['pressed'])

const letterClick = () => {
  isActive.value = false
  game.addLetter(letter)

  console.log(game.guessedLetters)
}
</script>

<template>
  <button class="letter-box" :disabled="!isActive" @click="letterClick">
    {{ letter }}
  </button>
</template>
