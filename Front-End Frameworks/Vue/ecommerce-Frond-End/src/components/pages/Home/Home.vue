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
        <features-items :allProducts="allProducts" />
        <category-tab :allCategories="allCategories" />
        <recomended-items :allProducts="allProducts" />
      </div>
    </div>
  </div>
</template>

<script src="./Home"></script>
<style scoped src="./Home.scss" lang="scss"></style>