<template>
  <div class="recommended_items">
    <!-- <div v-for="product in allProducts" :key="product._id" class="item">
      <h1>{{ product }}</h1>
      <product-small :product="product"></product-small>
    </div> -->
    <h2 class="title text-center">recommended items</h2>
    <div
      id="recommended-item-carousel"
      class="carousel slide"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div v-for="product in allProducts" :key="product._id" class="item">
          <h1>Yes</h1>
          <product-small :product="product"></product-small>
        </div>
      </div>
      <router-link
        class="left recommended-item-control"
        to="#recommended-item-carousel"
        data-slide="prev"
      >
        <i class="fa fa-angle-left"></i>
      </router-link>
      <router-link
        class="right recommended-item-control"
        to="#recommended-item-carousel"
        data-slide="next"
      >
        <i class="fa fa-angle-right"></i>
      </router-link>
    </div>
  </div>
</template>

<script src="./RecomendedItems.js"></script>

<style src="./RecomendedItems.scss" lang="scss"></style>