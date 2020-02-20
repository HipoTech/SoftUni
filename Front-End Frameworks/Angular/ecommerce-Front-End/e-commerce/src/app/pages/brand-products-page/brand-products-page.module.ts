import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandProductPageRoutingModule } from './brand-products-page-routing.module';
import { SharedComponentsModule } from 'src/app/core/shared-components.module';
import { BrandProductPageComponent } from './brand-products-page.component';


@NgModule({
  declarations: [
    BrandProductPageComponent,
  ],
  imports: [
    CommonModule,
    BrandProductPageRoutingModule,
    SharedComponentsModule,
  ]
})
export class BrandProductPageModule { }
