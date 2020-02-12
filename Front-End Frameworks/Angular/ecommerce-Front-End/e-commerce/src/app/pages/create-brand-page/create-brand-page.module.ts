import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateBrandPageRoutingModule } from './create-brand-page-routing.module';
import { CreateBrandPageComponent } from './create-brand-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatFormFieldModule } from '@angular/material';


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
  ]
})
export class CreateBrandPageModule { }
