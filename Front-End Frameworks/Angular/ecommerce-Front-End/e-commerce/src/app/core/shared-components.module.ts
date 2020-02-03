import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { SliderComponent } from './slider/slider.component';
import { CategorySideBarComponent } from './category-side-bar/category-side-bar.component';
import { BrandsSideBarComponent } from './brands-side-bar/brands-side-bar.component';
import { PriceRangeSideBarComponent } from './price-range-side-bar/price-range-side-bar.component';
import { BrandComponentComponent } from './brand-component/brand-component.component';
import { RouterModule } from '@angular/router';
import { CategoryComponentComponent } from './category-component/category-component.component';



@NgModule({
  declarations: [
    ProductComponent,
    SliderComponent,
    CategorySideBarComponent,
    BrandsSideBarComponent,
    PriceRangeSideBarComponent,
    BrandComponentComponent,
    CategoryComponentComponent,
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    ProductComponent,
    SliderComponent,
    CategorySideBarComponent,
    BrandsSideBarComponent,
    PriceRangeSideBarComponent,
    BrandComponentComponent,
    CategoryComponentComponent,
  ]
})
export class SharedComponentsModule { }
