import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { trigger, state, style, animate, transition } from '@angular/animations'

import { Product } from 'src/app/shared/interfaces';
import { Router } from '@angular/router';
import { UserService } from 'src/app/pages/user/user.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  animations: [
    trigger('fadeInState', [
      state('start', style({
        opacity: 0
      })),
      state('end', style({
        opacity: 1
      })),
      transition('start => end', animate('2000ms ease-out')),
    ])
  ]
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  refresh = false;
  constructor(private http: HttpClient, private router: Router, private userService: UserService) { }
  user: any
  show = true;

  get isLoggedIn() {
    this.user = JSON.parse(this.userService.isLoggedIn);
    return !!this.userService.isLoggedIn;
  }

  get stateName() {
    return this.show ? 'start' : 'end'
  }

  startAnimation() {
    this.show = false;
  }

  endAnimation() {
    this.show = true;
  }

  ngOnInit() {
    setTimeout(() => {
      this.startAnimation()
    }, 300);
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
