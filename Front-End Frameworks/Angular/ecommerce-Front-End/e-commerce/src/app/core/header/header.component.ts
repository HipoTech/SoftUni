import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/pages/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  get logOut() {
    return this.userService.logout;
  }

  get isLoggedIn() {
    return this.userService.isLoggedIn;
  }

}
