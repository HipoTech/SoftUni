import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home.component';
import { FeaturesItemsComponent } from 'src/app/core/features-items/features-items.component';
import { RecommendedItemsComponent } from 'src/app/core/recommended-items/recommended-items.component';
import { ProductSmallComponent } from 'src/app/core/product-small/product-small.component';
import { CategoryTabComponent } from 'src/app/core/category-tab/category-tab.component';
import { SharedComponentsModule } from 'src/app/core/shared-components.module';

@NgModule({
  declarations: [
    HomeComponent,
    FeaturesItemsComponent,
    RecommendedItemsComponent,
    CategoryTabComponent,
    ProductSmallComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedComponentsModule
  ]
})
export class HomeModule { }
