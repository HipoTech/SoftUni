<template>
  <div class="col-sm-4">
    <div class="product-image-wrapper">
      <div class="single-products">
        <router-link
          :to="{ name: 'ProductsByBrand', params: { id: brand._id } }"
        >
          <div class="productinfo text-center">
            <img :src="brand.imageUrl" :alt="brand.name" />
            <p>{{ brand.name }}</p>
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
                :to="{ name: 'EditBrandPage', params: { id: brand._id } }"
                class="btn btn-default add-to-cart"
              >
                <i class="fa fa-edit"></i>
                Edit {{ brand.name }}
              </router-link>
            </h2>
            <h2>
              <router-link to="/" class="btn btn-default add-to-cart">
                <i class="fa fa-trash"></i>
                Delete {{ brand.name }}
              </router-link>
              <!-- <a
                (click)="deleteBrand(brand._id)"
                routerLink="/"
                class="btn btn-default add-to-cart"
              >
                <i class="fa fa-trash"></i>
                Delete {{ brand.name }}
              </a> -->
            </h2>
          </div>
        </div>
        <!-- /isLoggedIn -->
      </div>
    </div>
  </div>
</template>

<script src="./Brand.js"></script>

<style scoped src="./Brand.scss" lang="scss"></style>