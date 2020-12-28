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
        <div v-for="category in allCategories" :key="category._id">
          <category :category="category"></category>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./Categories"></script>
<style scoped src="./Categories.scss" lang="scss"></style>