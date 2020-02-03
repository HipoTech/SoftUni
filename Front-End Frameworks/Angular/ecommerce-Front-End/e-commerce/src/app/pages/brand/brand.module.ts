import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandRoutingModule } from './brand-routing.module';
import { SharedComponentsModule } from 'src/app/core/shared-components.module';
import { BrandComponent } from './brand.component';


@NgModule({
  declarations: [
    BrandComponent
  ],
  imports: [
    CommonModule,
    BrandRoutingModule,
    SharedComponentsModule,
  ]
})
export class BrandModule { }
