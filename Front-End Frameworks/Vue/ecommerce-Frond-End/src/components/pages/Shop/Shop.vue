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
        <div v-for="product in allProducts" :key="product._id">
          <product :product="product"></product>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./Shop"></script>
<style scoped src="./Shop.scss" lang="scss"></style>