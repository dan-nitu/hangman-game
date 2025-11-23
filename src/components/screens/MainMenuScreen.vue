<script setup>
import Button from '../Button.vue'
</script>

<template>
  <div class="main-menu-screen">
    <img src="../../assets/images/logo.svg" alt="" />

    <Button variant="play" />
    <Button variant="primary" changeState="how-to-play">how to play</Button>
  </div>
</template>
