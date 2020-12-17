<template>
  <div class="alert-container">
    <p v-if="hasError">
      {{ errorMessage }}
    </p>
  </div>
</template>

<script src="./ErrorMessage.js"></script>

<style scoped src="./ErrorMessage.scss" lang="scss"></style>