<template>
  <div class="features_items" *ngIf="allProducts">
    <h2 class="title text-center">Features Items</h2>
    <!-- <ng-container *ngIf="allProducts">
      <ng-container *ngFor="let product of allProducts">
        <app-product
          *ngIf="product.featuredItem"
          [product]="product"
        ></app-product>
      </ng-container>
    </ng-container> -->
    <!-- <ng-container *ngIf="!allProducts">
      <h3 class="title text-center">
        No featured items are available at the moment!
      </h3>
    </ng-container> -->
  </div>
</template>

<script src="./FeaturesItems.js"></script>

<style scoped src="./FeaturesItems.scss" lang="scss"></style>