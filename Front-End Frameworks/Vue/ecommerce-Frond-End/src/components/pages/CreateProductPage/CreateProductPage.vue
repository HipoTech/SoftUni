<template>
  <div>
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
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="title"
              :rules="validation.name"
              :counter="10"
              label="Product Name"
              required
            ></v-text-field>
            <v-text-field
              v-model="webId"
              :rules="validation.artNumber"
              :counter="5"
              label="Art. number:"
              required
              type="number"
            ></v-text-field>
            <v-text-field
              v-model="price"
              :rules="validation.price"
              label="Price:"
              required
              type="number"
            ></v-text-field>
            <v-text-field
              v-model="condition"
              :rules="validation.condition"
              :counter="10"
              label="Condition:"
              required
            ></v-text-field>
            <v-select
              v-model="brand"
              :items="allBrands"
              item-text="name"
              item-value="_id"
              label="Brand"
              persistent-hint
              return-object
              single-line
              :rules="validation.brandDropDownRules"
              required
            ></v-select>
            <v-select
              v-model="category"
              :items="allCategories"
              item-text="name"
              item-value="_id"
              label="Category"
              persistent-hint
              return-object
              single-line
              :rules="validation.categoryDropDownRules"
              required
            ></v-select>
            <v-text-field
              v-model="imageUrl"
              :rules="validation.imageUrl"
              :counter="10"
              label="Image URL"
              required
            ></v-text-field>
            <v-textarea
              v-model="description"
              :rules="validation.description"
              :counter="10"
              label="Description:"
              required
            ></v-textarea>
            <div class="checkbox">
              <v-checkbox
                v-model="availability"
                label="Product is available"
              ></v-checkbox>
              <v-checkbox
                v-model="featuredItem"
                label="Product is featured"
              ></v-checkbox>
              <v-checkbox
                v-model="recommended"
                label="Product is recommended"
              ></v-checkbox>
              <v-checkbox
                v-model="onSlider"
                label="Product is on the slider"
              ></v-checkbox>
            </div>
            <v-btn
              :disabled="!valid"
              color="orange lighten-2"
              class="mr-4"
              @click="createProduct()"
            >
              Create Product
            </v-btn>
          </v-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./CreateProductPage"></script>
<style scoped src="./CreateProductPage.scss" lang="scss"></style>