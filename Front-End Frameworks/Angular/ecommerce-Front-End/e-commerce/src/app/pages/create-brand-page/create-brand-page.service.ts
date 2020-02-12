import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Brand } from 'src/app/shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CreateBrandPageService {

  constructor(private http: HttpClient) { }
  createBrand(brand) {
    this.http.post<Brand>('http://localhost:8080/api/brands/create', brand).subscribe(response => {
      console.log(response);
    })
  }
}
