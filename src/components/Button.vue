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
    default: 'primary', // primary secondary play
  },
})

const link = computed(() => {
  return props.variant === 'play' ? '/play-category' : props.to
})
</script>

<template>
  <RouterLink :to="link" :class="['button', props.variant]">
    <img v-if="props.variant === 'play'" src="../assets/images/icon-play.png" alt="play-button" />
    <slot v-else />
  </RouterLink>
</template>
