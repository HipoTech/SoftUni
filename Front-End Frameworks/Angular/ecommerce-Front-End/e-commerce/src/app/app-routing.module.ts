import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module')
      .then(m => m.HomeModule),
  },
  {
    path: 'shop',
    loadChildren: () => import('./pages/shop/shop.module')
      .then(m => m.ShopModule),
  },
  {
    path: 'brands',
    loadChildren: () => import('./pages/brand/brand.module')
      .then(m => m.BrandModule),
  },
  {
    path: 'login-register',
    loadChildren: () => import('./pages/user/user.module')
      .then(m => m.UserModule),
  },
  {
    path: 'categories',
    loadChildren: () => import('./pages/category-page/category-page.module')
      .then(m => m.CategoryPageModule),
  },
  {
    path: 'product/:id',
    loadChildren: () => import('./pages/detail-page/detail-page.module')
      .then(m => m.DetailPageModule),
  },
  {
    path: 'create-product',
    loadChildren: () => import('./pages/create-product-page/create-product-page.module')
      .then(m => m.CreateProductPageModule),
    canLoad: [AuthGuard],
  },
  {
    path: 'create-brand',
    loadChildren: () => import('./pages/create-brand-page/create-brand-page.module')
      .then(m => m.CreateBrandPageModule),
    canLoad: [AuthGuard],
  },
  {
    path: 'create-category',
    loadChildren: () => import('./pages/create-category-page/create-category-page.module')
      .then(m => m.CreateCategoryPageModule),
    canLoad: [AuthGuard],
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
