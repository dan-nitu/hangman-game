<script setup>
import { defineProps, computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  to: {
    type: String,
    default: '/',
  },
  variant: {
    type: String,
    default: 'primary',
    validator: (value) =>
      ['primary', 'secondary', 'play', 'category', 'back', 'menu'].includes(value),
  },
})

const link = computed(() => {
  return props.variant === 'play' ? '/play-category' : props.to
})
</script>

<template>
  <RouterLink :to="link" :class="['button', props.variant]">
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
  </RouterLink>
</template>
