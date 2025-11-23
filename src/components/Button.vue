<script setup>
import { defineProps, inject } from 'vue'

const props = defineProps({
  changeState: {
    type: String,
    default: '',
  },
  variant: {
    type: String,
    default: 'primary',
    validator: (value) =>
      ['primary', 'secondary', 'play', 'category', 'back', 'menu'].includes(value),
  },
})

const screenState = inject('screenState')

const changeScreenState = () => {
  if (props.changeState) {
    screenState.value = props.changeState
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
