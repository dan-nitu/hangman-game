<script setup>
import Header from '../Header.vue'
import Button from '../Button.vue'

const categories = ['movies', 'tv shows', 'countries', 'capital cities', 'animals', 'sports']
</script>

<template>
  <div class="pick-a-category-screen">
    <Header title="pick a category" />

    <div class="category-list">
      <Button
        v-for="category in categories"
        :key="category"
        variant="category"
        changeState="game"
        :category="category"
      >
        {{ category }}
      </Button>
    </div>
  </div>
</template>
