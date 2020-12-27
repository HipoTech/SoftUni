<template>
  <div class="features_items" v-if="allProducts">
    <h2 class="title text-center">Features Items</h2>
    <template v-if="allProducts">
      <div v-for="product in allProducts" :key="product._id">
        <product v-if="product.featuredItem" :product="product"></product>
      </div>
    </template>
    <template v-if="!allProducts">
      <h3 class="title text-center">
        No featured items are available at the moment!
      </h3>
    </template>
  </div>
</template>

<script src="./FeaturesItems.js"></script>

<style scoped src="./FeaturesItems.scss" lang="scss"></style>