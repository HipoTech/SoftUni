import { Injectable } from '@angular/core';
import { Product } from 'src/app/shared/interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  products: Product[];

  constructor(private http: HttpClient) { }

  getAllProducts() {
    this.http.get<Product[]>('http://localhost:8080/api/products/getAll').subscribe(product => {
      this.products = product;
    })
  }
}

