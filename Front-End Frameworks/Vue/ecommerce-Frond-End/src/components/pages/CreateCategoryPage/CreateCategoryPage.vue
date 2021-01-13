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
        <v-form
          @submit.prevent="createCategory()"
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-text-field
            v-model="categoryName"
            :rules="nameRules"
            :counter="10"
            label="Category name"
            required
          ></v-text-field>
          <v-text-field
            v-model="categoryImageUrl"
            :rules="nameRules"
            :counter="10"
            label="Category image URL"
            required
          ></v-text-field>
          <v-btn
            type="submit"
            :disabled="!valid"
            color="orange lighten-2"
            class="mr-4"
          >
            Create Category
          </v-btn>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script src="./CreateCategoryPage"></script>
<style scoped src="./CreateCategoryPage.scss" lang="scss"></style>