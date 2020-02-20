import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopComponent } from './shop.component';
import { SharedComponentsModule } from 'src/app/core/shared-components.module';
import { ShopRoutingModule } from './shop.routing.module';

@NgModule({
  declarations: [
    ShopComponent,
  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
    ShopRoutingModule,
  ]
})
export class ShopModule { }
