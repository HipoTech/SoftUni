<template>
  <div class="example-container">
    <app-error-message
      :hasError="serverError.state"
      :errorMessage="serverError.errorMessage"
    />
    <form @submit.prevent="createBrand()">
      <label for="">Brand name</label>
      <input v-model="brandName" />
      <label for="">Brand image URL</label>
      <input v-model="brandImageUrl" />
      <button>Create Brand</button>
    </form>
  </div>
</template>

<script src="./CreateBrandPage"></script>
<style scoped src="./CreateBrandPage.scss" lang="scss"></style>