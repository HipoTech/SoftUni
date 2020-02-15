import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateBrandPageComponent } from './create-brand-page.component';


const routes: Routes = [{
  path: '',
  component: CreateBrandPageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateBrandPageRoutingModule { }
