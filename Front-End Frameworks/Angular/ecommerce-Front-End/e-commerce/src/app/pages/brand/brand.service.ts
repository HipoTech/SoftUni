import { Injectable } from '@angular/core';
import { Brand } from 'src/app/shared/interfaces/brand';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  brands: Brand[];

  constructor(private http: HttpClient) { }

  getAllBrands() {
    this.http.get<Brand[]>('http://localhost:8080/api/brands/getAll').subscribe(brand => {
      this.brands = brand;
    })
  }
}
