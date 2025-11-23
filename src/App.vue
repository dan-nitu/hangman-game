<script setup>
import Button from '@/components/Button.vue'
import LetterBox from '@/components/LetterBox.vue'
</script>

<template>
  <h1>the hangman game</h1>

  <Button variant="play" />
  <Button variant="primary" to="#">how to play</Button>
  <Button variant="secondary" to="#">quit game</Button>
  <Button variant="category" to="#">category</Button>
  <Button variant="back" to="#">category</Button>
  <Button variant="menu" to="#">category</Button>

  <LetterBox letter="A" />
</template>
