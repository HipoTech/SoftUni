import { Injectable } from '@angular/core';
import { Brand } from 'src/app/shared/interfaces/brand';
import { HttpClient } from '@angular/common/http';
import { Category } from 'src/app/shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  brands: Brand[];
  categories: Category[];

  constructor(private http: HttpClient) { }

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
