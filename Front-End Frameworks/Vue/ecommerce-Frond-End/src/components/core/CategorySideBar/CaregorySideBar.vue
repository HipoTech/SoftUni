<template>
  <div>
    <h2>Category</h2>
    <div class="panel-group category-products" id="accordian">
      <div
        class="panel panel-default"
        v-for="(category, index) in allCategories"
        :key="category._id"
      >
        <div class="panel-heading">
          <h4 class="panel-title">
            {{ index }}
            <router-link
              data-toggle="collapse"
              data-parent="#accordian"
              :to="'#' + index"
            >
              <span class="badge pull-right">
                <i class="fa fa-plus"></i>
              </span>
              {{ category.name }}
            </router-link>
          </h4>
        </div>
        <div :id="index" class="panel-collapse collapse">
          <div class="panel-body">
            <ul>
              <li v-for="brand in category.brands" :key="brand._id">
                <router-link :to="'/brand' + '/' + brand._id">
                  {{ brand.name }}
                  <span class="pull-right">
                    ( {{ brand.products.length }} )
                  </span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./CaregorySideBar.js"></script>

<style scoped src="./CaregorySideBar.scss" lang="scss"></style>