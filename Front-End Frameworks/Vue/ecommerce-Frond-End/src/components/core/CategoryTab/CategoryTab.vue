<template>
  <div class="category-tab">
    <div class="col-sm-12">
      <ul class="nav nav-tabs">
        <!-- <li *ngFor="let category of allCategories" RouterLinkActive="active">
          <a [href]="['#'+category.name]" data-toggle="tab">{{
            category.name
          }}</a>
        </li> -->
      </ul>
    </div>
    <div class="tab-content">
      <!-- <div
        *ngFor="let category of allCategories"
        class="tab-pane fade"
        RouterLinkActive="active"
        [id]="category.name"
      >
        <ng-container *ngFor="let product of category.products">
          <app-product-small [product]="product"></app-product-small>
        </ng-container>
      </div> -->
    </div>
  </div>
</template>

<script src="./CategoryTab.js"></script>

<style scoped src="./CategoryTab.scss" lang="scss"></style>