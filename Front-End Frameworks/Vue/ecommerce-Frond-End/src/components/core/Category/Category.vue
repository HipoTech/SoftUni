<template>
  <div class="col-sm-4">
    <div class="product-image-wrapper">
      <div class="single-products">
        <router-link
          :to="{ name: 'ProductsByCategory', params: { id: category._id } }"
        >
          <div class="productinfo text-center">
            <img :src="category.imageUrl" :alt="category.name" />
            <p>{{ category.name }}</p>
          </div>
        </router-link>
        <!-- isLoggedIn -->
        <div
          v-if="!!this.$store.state.users.isLoggedIn"
          class="product-overlay"
        >
          <div class="overlay-content">
            <h2>
              <router-link
                :to="/brand-edit/ + category._id"
                class="btn btn-default add-to-cart"
              >
                <i class="fa fa-edit"></i>
                Edit {{ category.name }}
              </router-link>
            </h2>
            <h2>
              <router-link to="/" class="btn btn-default add-to-cart">
                <i class="fa fa-trash"></i>
                Delete {{ category.name }}
              </router-link>
              <!-- <router-link
                (click)="deleteCategory(category._id)"
                to="/"
                class="btn btn-default add-to-cart"
              >
                <i class="fa fa-trash"></i>
                Delete {{ category.name }}
              </router-link> -->
            </h2>
          </div>
        </div>
        <!-- /isLoggedIn -->
      </div>
    </div>
  </div>
</template>

<script src="./Category.js"></script>

<style scoped src="./Category.scss" lang="scss"></style>