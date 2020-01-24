import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { SliderComponent } from './core/slider/slider.component';
import { CategorySideBarComponent } from './core/category-side-bar/category-side-bar.component';
import { BrandsSideBarComponent } from './core/brands-side-bar/brands-side-bar.component';
import { PriceRangeSideBarComponent } from './core/price-range-side-bar/price-range-side-bar.component';
import { FeaturesItemsComponent } from './core/features-items/features-items.component';
import { CategoryTabComponent } from './core/category-tab/category-tab.component';
import { RecommendedItemsComponent } from './core/recommended-items/recommended-items.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    CategorySideBarComponent,
    BrandsSideBarComponent,
    PriceRangeSideBarComponent,
    FeaturesItemsComponent,
    CategoryTabComponent,
    RecommendedItemsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
