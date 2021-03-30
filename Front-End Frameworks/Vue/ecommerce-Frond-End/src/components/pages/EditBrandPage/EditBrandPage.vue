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
        <v-form v-model="valid" @submit.prevent="editBrand()">
          <v-text-field
            v-model="brandName"
            :rules="validation.name"
            :counter="10"
            label="Brand name"
            required
          ></v-text-field>
          <v-text-field
            v-model="brandImageUrl"
            :rules="validation.imageUrl"
            :counter="10"
            label="Brand image URL"
            required
          ></v-text-field>
          <v-btn
            :disabled="!valid"
            type="submit"
            color="orange lighten-2"
            class="mr-4"
          >
            Edit Brand
          </v-btn>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script src="./EditBrandPage"></script>
<style scoped src="./EditBrandPage.scss" lang="scss"></style>