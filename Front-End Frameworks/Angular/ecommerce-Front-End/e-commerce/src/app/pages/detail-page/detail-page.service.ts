import { Injectable } from '@angular/core';
import { Brand, Category, Product } from 'src/app/shared/interfaces';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DetailPageService {
  product: Product;
  brands: Brand[];
  categories: Category[];

  constructor(private http: HttpClient, private fullRoute: ActivatedRoute) { }

  getProduct(productId) {
    this.http.post<Product>('http://localhost:8080/api/products/getOne', { id: productId }).subscribe(product => {
      this.product = product;
      return this.product;
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
