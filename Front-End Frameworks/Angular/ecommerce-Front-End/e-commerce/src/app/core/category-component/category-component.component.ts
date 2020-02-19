import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/shared/interfaces';
import { UserService } from 'src/app/pages/user/user.service';

@Component({
  selector: 'app-category-component',
  templateUrl: './category-component.component.html',
  styleUrls: ['./category-component.component.scss']
})
export class CategoryComponentComponent implements OnInit {
  @Input() category: Category;

  constructor(private userService: UserService) { }
  user: any

  get isLoggedIn() {
    this.user = JSON.parse(this.userService.isLoggedIn);
    return !!this.userService.isLoggedIn;
  }

  ngOnInit() {
  }

}
