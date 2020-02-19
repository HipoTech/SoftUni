import { Component, OnInit, Input } from '@angular/core';
import { Brand } from 'src/app/shared/interfaces/brand';
import { UserService } from 'src/app/pages/user/user.service';

@Component({
  selector: 'app-brand-component',
  templateUrl: './brand-component.component.html',
  styleUrls: ['./brand-component.component.scss']
})
export class BrandComponentComponent implements OnInit {
  @Input() brand: Brand;

  constructor(private userService: UserService) { }
  user: any

  get isLoggedIn() {
    this.user = JSON.parse(this.userService.isLoggedIn);
    return !!this.userService.isLoggedIn;
  }

  ngOnInit() {
  }

}
