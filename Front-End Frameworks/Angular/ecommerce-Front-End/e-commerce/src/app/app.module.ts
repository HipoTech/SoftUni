import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { UserModule } from './pages/user/user.module';
import { HomeModule } from './pages/home/home.module';
import { ShopModule } from './pages/shop/shop.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { BrandModule } from './pages/brand/brand.module';
import { CategoryPageModule } from './pages/category-page/category-page.module';
import { DetailPageModule } from './pages/detail-page/detail-page.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateCategoryPageModule } from './pages/create-category-page/create-category-page.module';
import { CreateBrandPageModule } from './pages/create-brand-page/create-brand-page.module';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { AppInterceptor } from './app-interceptors';
import { CookieService } from 'ngx-cookie-service'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    HomeModule,
    ShopModule,
    BrandModule,
    DetailPageModule,
    CategoryPageModule,
    CreateCategoryPageModule,
    CreateBrandPageModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptor,
      multi: true
    },
    CookieService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
