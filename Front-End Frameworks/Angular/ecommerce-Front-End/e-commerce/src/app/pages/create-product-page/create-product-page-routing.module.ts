import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProductPageComponent } from './create-product-page.component';


const routes: Routes = [
  {
    path: '',
    component: CreateProductPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateProductPageRoutingModule { }
