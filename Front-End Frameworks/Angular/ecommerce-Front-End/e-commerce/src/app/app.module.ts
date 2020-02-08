import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { DetailPageModule } from './pages/detail-page/detail-page.module';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
