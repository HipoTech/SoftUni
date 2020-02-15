import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCategoryPageComponent } from './create-category-page.component';


const routes: Routes = [{
  path: '',
  component: CreateCategoryPageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateCategoryPageRoutingModule { }
