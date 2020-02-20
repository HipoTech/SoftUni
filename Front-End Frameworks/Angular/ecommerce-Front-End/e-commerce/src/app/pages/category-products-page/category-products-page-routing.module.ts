import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryProductPageComponent } from './category-products-page.component';


const routes: Routes = [{
  path: '',
  component: CategoryProductPageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryProductPageRoutingModule { }
