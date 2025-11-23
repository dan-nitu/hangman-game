<script setup>
import Header from '../Header.vue'
import Card from '../Card.vue'

const instructions = [
  {
    id: 1,
    title: 'Choose a category',
    description:
      'First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word.',
  },
  {
    id: 2,
    title: 'Guess letters',
    description: `Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If it's wrong, you lose some health, which empties after eight incorrect guesses.`,
  },
  {
    id: 3,
    title: 'Win or lose',
    description:
      'You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose.',
  },
]
</script>

<template>
  <div class="how-to-play-screen">
    <Header title="How to Play" />

    <div class="cards-wrapper">
      <Card
        v-for="instruction in instructions"
        :key="instruction.id"
        :id="instruction.id"
        :title="instruction.title"
        :description="instruction.description"
      />
    </div>
  </div>
</template>
