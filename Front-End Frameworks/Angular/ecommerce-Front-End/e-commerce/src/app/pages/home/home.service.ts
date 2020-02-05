import { Injectable } from '@angular/core';
import { Product, Brand, Category } from 'src/app/shared/interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  products: Product[];
  brands: Brand[];
  categories: Category[];

  constructor(private http: HttpClient) {

  }

  getAllProducts() {
    this.http.get<Product[]>('http://localhost:8080/api/products/getAll').subscribe(product => {
      this.products = product;
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
