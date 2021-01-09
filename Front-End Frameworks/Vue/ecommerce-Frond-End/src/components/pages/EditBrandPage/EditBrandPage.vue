<template>
  <div class="example-container">
    <app-error-message
      :hasError="serverError.state"
      :errorMessage="serverError.errorMessage"
    />
    <form @submit.prevent="editBrand()">
      <label for="">Brand name</label>
      <input v-model="brandName" />
      <label for="">Brand image URL</label>
      <input v-model="brandImageUrl" />
      <button>Edit Brand</button>
    </form>
  </div>
</template>

<script src="./EditBrandPage"></script>
<style scoped src="./EditBrandPage.scss" lang="scss"></style>