import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateBrandPageRoutingModule } from './create-brand-page-routing.module';
import { CreateBrandPageComponent } from './create-brand-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatFormFieldModule } from '@angular/material';
import { SharedComponentsModule } from 'src/app/core/shared-components.module';


@NgModule({
  declarations: [
    CreateBrandPageComponent
  ],
  imports: [
    CommonModule,
    CreateBrandPageRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    SharedComponentsModule
  ]
})
export class CreateBrandPageModule { }
