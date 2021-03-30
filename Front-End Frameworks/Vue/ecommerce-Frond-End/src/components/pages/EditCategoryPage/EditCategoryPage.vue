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
        <v-form v-model="valid" @submit.prevent="editCategory()">
          <v-text-field
            v-model="categoryName"
            :rules="validation.name"
            :counter="10"
            label="Category image URL"
            required
          ></v-text-field>
          <v-text-field
            v-model="categoryImageUrl"
            :rules="validation.imageUrl"
            :counter="10"
            label="Category image URL"
            required
          ></v-text-field>
          <v-btn
            :disabled="!valid"
            type="submit"
            color="orange lighten-2"
            class="mr-4"
          >
            Edit Category
          </v-btn>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script src="./EditCategoryPage"></script>
<style scoped src="./EditCategoryPage.scss" lang="scss"></style>