import { Injectable } from '@angular/core';
import { Category } from 'src/app/shared/interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryPageService {

  categories: Category[];

  constructor(private http: HttpClient) { }

  getAllCategories() {
    this.http.get<Category[]>('http://localhost:8080/api/categories/getAll').subscribe(category => {
      this.categories = category;
    })
  }
}
