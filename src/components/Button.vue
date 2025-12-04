<script setup>
import { defineProps } from 'vue'
import { useGameStore } from '@/stores/game'

const game = useGameStore()

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) =>
      ['primary', 'secondary', 'play', 'category', 'back', 'menu'].includes(value),
  },
  changeState: {
    type: String,
    default: '',
  },
  category: {
    type: String,
    default: '',
  },
})

const changeScreenState = () => {
  if (props.changeState) {
    game.setScreen(props.changeState)

    if (props.variant === 'category') {
      game.setCategory(props.category)
    }
  }
}
</script>

<template>
  <div :class="['button', props.variant]" @click="changeScreenState">
    <img v-if="props.variant === 'play'" src="../assets/images/icon-play.png" alt="play-button" />
    <img
      v-else-if="props.variant === 'back'"
      src="../assets/images/icon-back.svg"
      alt="back-button"
    />
    <img
      v-else-if="props.variant === 'menu'"
      src="../assets/images/icon-menu.svg"
      alt="back-button"
    />
    <slot v-else />
  </div>
</template>
