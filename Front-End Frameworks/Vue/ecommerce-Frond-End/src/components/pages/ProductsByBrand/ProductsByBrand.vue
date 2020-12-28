<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-3">
        <div class="left-sidebar">
          <category-side-bar :allCategories="allCategories" />
          <brand-side-bar :allBrands="allBrands" />
          <price-range-sideBar />
        </div>
      </div>
      <div class="col-sm-9 padding-right">
        <div v-for="product in productsOfBrand" :key="product._id">
          <product :product="product"></product>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./ProductsByBrand"></script>
<style scoped src="./ProductsByBrand.scss" lang="scss"></style>