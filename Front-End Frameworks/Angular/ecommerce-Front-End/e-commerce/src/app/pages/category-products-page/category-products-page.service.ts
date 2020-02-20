import { Injectable } from '@angular/core';
import { Brand, Category, Product } from 'src/app/shared/interfaces';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CategoryProductPageService {
  category: Category;
  productFromDb: Product[]
  brands: Brand[];
  categories: Category[];

  constructor(private http: HttpClient, private fullRoute: ActivatedRoute) { }

  getCategory(categoryId) {
    this.http.post<Category>('http://localhost:8080/api/categories/getOne', { id: categoryId }).subscribe(category => {
      this.category = category;
      this.productFromDb = category[0].products;
      return this.category
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
