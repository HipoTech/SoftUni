<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-3">
        <div class="left-sidebar">
          <category-side-bar :allCategories="apiAllCategories" />
          <!-- <CategorySideBar [allCategories]="allCategories" /> -->
          <brand-side-bar />
          <!-- <brand-side-bar [allBrands]="allBrands"></brand-side-bar> -->
          <price-range-sideBar />
          <!-- <app-price-range-side-bar></app-price-range-side-bar> -->
        </div>
      </div>
      <div class="col-sm-9 padding-right">
        <features-items />
        <!-- <app-features-items [allProducts]="allProducts"></app-features-items> -->
        <category-tab />
        <!-- <app-category-tab [allCategories]="allCategories"></app-category-tab> -->
        <recomended-items />
        <!-- <app-recommended-items [allProducts]="allProducts"></app-recommended-items> -->
      </div>
    </div>
  </div>
</template>

<script src="./Home"></script>
<style scoped src="./Home.scss" lang="scss"></style>