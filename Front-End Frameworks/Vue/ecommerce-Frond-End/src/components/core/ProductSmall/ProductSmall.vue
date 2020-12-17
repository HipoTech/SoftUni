<template>
  <div class="col-sm-3">
    <div class="product-image-wrapper">
      <div class="single-products">
        <div class="productinfo text-center">
          <img :src="product.imageUrl" :alt="product.title" />
          <h2>{{ product.price }}</h2>
          <p>{{ product.title }}</p>
          <router-link to="#" class="btn btn-default add-to-cart">
            <i class="fa fa-shopping-cart"></i>
            Add to cart
          </router-link>
        </div>
        <!-- <div *ngIf="!!isLoggedIn" class="product-overlay">
          <div class="overlay-content">
            <h2>{{ product.price }}</h2>
            <p>{{ product.title }}</p>
            <a href="#" class="btn btn-default add-to-cart"
              ><i class="fa fa-shopping-cart"></i>Add to cart</a
            >
          </div>
        </div> -->
      </div>
      <div class="choose">
        <ul class="nav nav-pills nav-justified">
          <li>
            <a href="#"><i class="fa fa-plus-square"></i>Add to wishlist</a>
          </li>
          <li>
            <a href="#"><i class="fa fa-plus-square"></i>Add to compare</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script src="./ProductSmall.js"></script>

<style scoped src="./ProductSmall.scss" lang="scss"></style>