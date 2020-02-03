import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopComponent } from './shop.component';
import { SharedComponentsModule } from 'src/app/core/shared-components.module';

@NgModule({
  declarations: [
    ShopComponent,
  ],
  imports: [
    CommonModule,
    SharedComponentsModule
  ]
})
export class ShopModule { }
