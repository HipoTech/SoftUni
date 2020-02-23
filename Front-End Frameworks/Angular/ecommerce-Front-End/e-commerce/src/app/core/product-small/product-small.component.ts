import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/shared/interfaces';
import { UserService } from 'src/app/pages/user/user.service';

@Component({
  selector: 'app-product-small',
  templateUrl: './product-small.component.html',
  styleUrls: ['./product-small.component.scss']
})
export class ProductSmallComponent implements OnInit {
  @Input() product: Product;

  constructor(private userService: UserService) { }
  user: any

  ngOnInit() {
  }

  get isLoggedIn() {
    this.user = JSON.parse(this.userService.isLoggedIn);
    return !!this.userService.isLoggedIn;
  }

}
