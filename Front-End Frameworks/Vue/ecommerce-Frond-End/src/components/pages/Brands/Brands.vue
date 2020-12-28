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
        <div v-for="brand in allBrands" :key="brand._id">
          <brand :brand="brand"></brand>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./Brands"></script>
<style scoped src="./Brands.scss" lang="scss"></style>