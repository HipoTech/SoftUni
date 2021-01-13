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
          @submit.prevent="createBrand()"
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-text-field
            v-model="brandName"
            :rules="nameRules"
            :counter="10"
            label="Brand name"
            required
          ></v-text-field>
          <v-text-field
            v-model="brandImageUrl"
            :rules="nameRules"
            :counter="10"
            label="Brand image URL"
            required
          ></v-text-field>
          <v-btn
            type="submit"
            :disabled="!valid"
            color="orange lighten-2"
            class="mr-4"
          >
            Create Brand
          </v-btn>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script src="./CreateBrandPage"></script>
<style scoped src="./CreateBrandPage.scss" lang="scss"></style>