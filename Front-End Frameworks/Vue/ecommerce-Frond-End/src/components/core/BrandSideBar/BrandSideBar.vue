<template>
  <div class="brands_products">
    <h2>Brands</h2>
    <div class="brands-name">
      <ul class="nav nav-pills nav-stacked">
        <li v-for="brand in allBrands" :key="brand._id">
          <router-link :to="'/brand/' + brand._id">
            <span class="pull-right"> ( {{ brand.products.length }} ) </span>
            {{ brand.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script src="./BrandSideBar"></script>

<style scoped src="./BrandSideBar.scss" lang="scss"></style>