<script setup>
import { defineProps } from 'vue'

defineProps({
  livesNumber: {
    type: Number,
    required: true,
  },
})
</script>

<template>
  <div class="health">
    <div class="healthbar">
      <div :class="`healthbar-fill lives-${livesNumber}`"></div>
    </div>
    <img src="../assets/images/icon-heart.svg" alt="heart-icon" />
  </div>
</template>
