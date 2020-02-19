import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/shared/interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  refresh = false;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }


  deleteProduct(webId) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        _id: webId
      },
      withcredentials: true
    };
    this.http.delete('http://localhost:8080/api/products/delete', options).subscribe();
    this.router.navigate(['/home']);

  }
}
