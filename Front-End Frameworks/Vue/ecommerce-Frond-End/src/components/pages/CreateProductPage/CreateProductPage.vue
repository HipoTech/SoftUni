<template>
  <div>
    <div class="example-container">
      <label>Product Name</label>
      <input
        v-model="title"
        matInput
        placeholder="Please enter a name minimum 4 character long"
      />
      <!-- <error-message
          v-if="checkTitle"
          errorMessage="Title is reqired!"
        ></error-message> -->
      <label>Art. number:</label>
      <input
        v-model="webId"
        type="number"
        matInput
        placeholder="Please enter a name minimum 4 character long"
      />
      <!-- <error-message
          *ngIf="checkWebId"
          errorMessage="Art. number is reqired!"
        ></error-message> -->
      <label>Price:</label>
      <input
        v-model="price"
        type="number"
        matInput
        placeholder="Please enter a price"
      />
      <!-- <error-message
          *ngIf="checkPrice"
          errorMessage="Price is reqired!"
        ></error-message> -->
      <label>Condition:</label>
      <input
        v-model="condition"
        matInput
        placeholder="Please enter a condition"
      />
      <!-- <error-message
          *ngIf="checkCondition"
          errorMessage="Condition is reqired!"
        ></error-message> -->
      <label>Brand:</label>
      <select v-model="brand" panelClass="example-panel-yellow">
        <option v-for="brand in allBrands" :key="brand._id" :value="brand._id">
          {{ brand.name }}
        </option>
      </select>
      <!-- <error-message
          *ngIf="checkBrand"
          errorMessage="Please pick a Brand!"
        ></error-message> -->
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
      <!-- <error-message
          *ngIf="checkCategory"
          errorMessage="Please pick a Category!"
        ></error-message> -->
      <label>Description:</label>
      <textarea
        v-model="description"
        matInput
        placeholder="Ex. It makes me feel..."
      ></textarea>
      <!-- <error-message
          *ngIf="checkDescription"
          errorMessage="Please enter a description!"
        ></error-message> -->
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
      <!-- <error-message
            *ngIf="checkImageUrl"
            errorMessage="Url of a image is reqired!"
          ></error-message> -->
      <button @click="createProduct()" class="btn btn-default">
        Create Product
      </button>
    </div>
  </div>
</template>

<script src="./CreateProductPage"></script>
<style scoped src="./CreateProductPage.scss" lang="scss"></style>