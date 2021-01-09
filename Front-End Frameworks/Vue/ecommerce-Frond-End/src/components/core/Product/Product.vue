<template>
  <div class="col-sm-4">
    <div class="product-image-wrapper">
      <div class="single-products">
        <div class="productinfo text-center">
          <img :src="product.imageUrl" :alt="product.title" />
          <h2>{{ product.price }}</h2>
          <p>{{ product.title }}</p>
          <router-link
            :to="{ name: 'ProductDetails', params: { id: product._id } }"
            class="btn btn-default add-to-cart"
          >
            <i class="fa fa-shopping-cart"></i>
            Product details
          </router-link>
        </div>
        <div v-if="!!isLoggedIn" class="product-overlay">
          <div class="overlay-content">
            <h2>{{ product.price }}</h2>
            <p>{{ product.title }}</p>
            <router-link
              :to="{ name: 'EditProductPage', params: { id: product._id } }"
              class="btn btn-default add-to-cart"
              ><i class="fa fa-shopping-cart"></i>Edit Product</router-link
            >
            <router-link
              :to="{ name: 'ProductDetails', params: { id: product._id } }"
              class="btn btn-default add-to-cart"
              ><i class="fa fa-shopping-cart"></i>Product Details</router-link
            >
            <router-link
              @click.native="
                deleteProduct(product._id, product.brand, product.category)
              "
              class="btn btn-default add-to-cart"
              :to="{ name: 'Shop' }"
            >
              <i class="fa fa-shopping-cart"></i>
              Delete {{ product.title }}
            </router-link>
          </div>
        </div>
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

<script src="./Product.js"></script>

<style scoped src="./Product.scss" lang="scss"></style>