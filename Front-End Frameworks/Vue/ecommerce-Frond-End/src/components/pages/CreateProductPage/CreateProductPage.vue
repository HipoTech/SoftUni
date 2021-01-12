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
            <v-col cols="12" md="4">
              <v-text-field
                v-model="title"
                :rules="nameRules"
                :counter="10"
                label="Product Name"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="webId"
                :rules="nameRules"
                :counter="10"
                label="Art. number:"
                required
                type="number"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="price"
                :rules="nameRules"
                :counter="10"
                label="Price:"
                required
                type="number"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="condition"
                :rules="nameRules"
                :counter="10"
                label="Condition:"
                required
              ></v-text-field>
            </v-col>
            <v-col class="d-flex" cols="12" sm="6">
              <v-select
                v-model="brand"
                :items="allBrands"
                item-text="name"
                item-value="_id"
                label="Brand"
                persistent-hint
                return-object
                single-line
                :rules="brandDropDownRules"
                required
              ></v-select>
            </v-col>
            <v-col class="d-flex" cols="12" sm="6">
              <v-select
                v-model="category"
                :items="allCategories"
                item-text="name"
                item-value="_id"
                label="Category"
                persistent-hint
                return-object
                single-line
                :rules="categoryDropDownRules"
                required
              ></v-select>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="imageUrl"
                :rules="nameRules"
                :counter="10"
                label="Image URL"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-textarea
                v-model="description"
                :rules="nameRules"
                :counter="10"
                label="Description:"
                required
              ></v-textarea>
            </v-col>
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
        <!-- <div class="example-container">
          <label>Product Name</label>
          <input
            v-model="title"
            matInput
            placeholder="Please enter a name minimum 4 character long"
          />
          <error-message
          v-if="checkTitle"
          errorMessage="Title is reqired!"
        ></error-message>
          <label>Art. number:</label>
          <input
            v-model="webId"
            type="number"
            matInput
            placeholder="Please enter a name minimum 4 character long"
          />
          <label>Price:</label>
          <input
            v-model="price"
            type="number"
            matInput
            placeholder="Please enter a price"
          />
          <label>Condition:</label>
          <input
            v-model="condition"
            matInput
            placeholder="Please enter a condition"
          />
          <label>Brand:</label>
          <select v-model="brand" panelClass="example-panel-yellow">
            <option
              v-for="brand in allBrands"
              :key="brand._id"
              :value="brand._id"
            >
              {{ brand.name }}
            </option>
          </select>
          <label>Category:</label>
          <select v-model="category" panelClass="example-panel-yellow">
            <option
              v-for="category in allCategories"
              :key="category._id"
              :value="category._id"
            >
              {{ category.name }}
            </option>
          </select>
          <label>Description:</label>
          <textarea
            v-model="description"
            matInput
            placeholder="Ex. It makes me feel..."
          ></textarea>
          <div class="checkbox">
            <label>Product is available</label>
            <input type="checkbox" v-model="availability" />
            <br />
            <label>Product is featured</label>
            <input type="checkbox" v-model="featuredItem" />
            <br />
            <label>Product is recommended</label>
            <input type="checkbox" v-model="recommended" />
            <br />
            <label>Product is on the slider</label>
            <input type="checkbox" v-model="onSlider" />
            <br />
          </div>
          <br />
          <label>Image URL</label>
          <input
            v-model="imageUrl"
            matInput
            placeholder="Please enter a name minimum 4 character long"
          />
          <button @click="createProduct()" class="btn btn-default">
            Create Product
          </button>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script src="./CreateProductPage"></script>
<style scoped src="./CreateProductPage.scss" lang="scss"></style>