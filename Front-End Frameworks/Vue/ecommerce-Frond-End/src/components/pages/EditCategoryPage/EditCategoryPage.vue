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
      <div class="example-container">
        <app-error-message
          :hasError="serverError.state"
          :errorMessage="serverError.errorMessage"
        />
        <form @submit.prevent="editCategory()">
          <label for="">Category name</label>
          <input v-model="categoryName" />
          <label for="">Category image URL</label>
          <input v-model="categoryImageUrl" />
          <button>Edit Category</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script src="./EditCategoryPage"></script>
<style scoped src="./EditCategoryPage.scss" lang="scss"></style>