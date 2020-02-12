import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from 'src/app/shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CreateCategoryPageService {

  constructor(private http: HttpClient) { }
  createCategory(category) {
    this.http.post<Category>('http://localhost:8080/api/categories/cteate', category).subscribe(response => {
      console.log(response);
    })
  }
}
