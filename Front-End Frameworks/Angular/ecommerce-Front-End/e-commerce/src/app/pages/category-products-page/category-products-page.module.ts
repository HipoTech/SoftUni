import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryProductPageRoutingModule } from './category-products-page-routing.module';
import { SharedComponentsModule } from 'src/app/core/shared-components.module';
import { CategoryProductPageComponent } from './category-products-page.component';


@NgModule({
  declarations: [
    CategoryProductPageComponent,
  ],
  imports: [
    CommonModule,
    CategoryProductPageRoutingModule,
    SharedComponentsModule,
  ]
})
export class CategoryProductPageModule { }
