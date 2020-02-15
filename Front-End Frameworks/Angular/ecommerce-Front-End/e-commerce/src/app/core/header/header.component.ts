import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/pages/user/user.service';
import { User } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UserService) { }
  user: any

  ngOnInit() {

  }

  get isLoggedIn() {
    this.user = JSON.parse(this.userService.isLoggedIn);
    return !!this.userService.isLoggedIn;
  }

  logOut() {
    return this.userService.logout();
  }


}
