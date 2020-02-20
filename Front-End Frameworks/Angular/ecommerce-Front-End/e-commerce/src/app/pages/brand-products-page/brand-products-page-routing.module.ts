import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandProductPageComponent } from './brand-products-page.component';


const routes: Routes = [{
  path: '',
  component: BrandProductPageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrandProductPageRoutingModule { }
