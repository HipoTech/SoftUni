import { Injectable } from '@angular/core';
import { Brand, Category, Product } from 'src/app/shared/interfaces';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BrandProductPageService {
  brand: Brand;
  productFromDb: Product[]
  brands: Brand[];
  categories: Category[];

  constructor(private http: HttpClient, private fullRoute: ActivatedRoute) { }

  getBrand(brandId) {
    this.http.post<Brand>('http://localhost:8080/api/brands/getOne', { id: brandId }).subscribe(brand => {
      this.brand = brand;
      this.productFromDb = brand[0].products;
      return this.productFromDb
    })
  }

  getAllBrands() {
    this.http.get<Brand[]>('http://localhost:8080/api/brands/getAll').subscribe(brand => {
      this.brands = brand;
    })
  }

  getAllCategories() {
    this.http.get<Category[]>('http://localhost:8080/api/categories/getAll').subscribe(category => {
      this.categories = category;
    })
  }

}
