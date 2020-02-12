import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { BrandComponent } from './pages/brand/brand.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { LoginRegisterComponent } from './pages/user/login-register/login-register.component';
import { CreateProductPageComponent } from './pages/create-product-page/create-product-page.component';
import { CreateBrandPageComponent } from './pages/create-brand-page/create-brand-page.component';
import { CreateCategoryPageComponent } from './pages/create-category-page/create-category-page.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'shop',
    component: ShopComponent
  },
  {
    path: 'brands',
    component: BrandComponent
  },
  {
    path: 'login-register',
    component: LoginRegisterComponent
  },
  {
    path: 'categories',
    component: CategoryPageComponent
  },
  {
    path: 'product/:id',
    component: DetailPageComponent
  },
  {
    path: 'create-product',
    component: CreateProductPageComponent
  },
  {
    path: 'create-brand',
    component: CreateBrandPageComponent
  },
  {
    path: 'create-category',
    component: CreateCategoryPageComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
