import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/interfaces';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) { }

  currentUser: object = null;

  get isLoggedIn() {
    return !!this.currentUser;
  }

  login(user) {
    this.http.post<User>('http://localhost:8080/api/user/login', user).subscribe(response => {
      console.log(response);
      this.currentUser = response;
      this.router.navigate(['/home']);
    })
  };

  register(user) {
    this.http.post<User>('http://localhost:8080/api/user/register', user).subscribe(response => {
      console.log(response);
    })
  };

  logout() {
    this.http.get('http://localhost:8080/api/user/logout').subscribe(response => {
      console.log(response);
      this.currentUser = null;
      this.router.navigate(['/login-register']);
    })
  };
}
