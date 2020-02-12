import { Injectable } from '@angular/core';
import { Product } from 'src/app/shared/interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateProductPageService {

  constructor(private http: HttpClient) { }

  createProduct(product) {
    this.http.post<Product>('http://localhost:8080/api/products/create', product).subscribe(response => {
      console.log(response);
    })
  }
}
