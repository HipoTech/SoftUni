import { Injectable, OnInit } from '@angular/core';
import { User } from 'src/app/shared/interfaces';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service'

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {
  private userCookie: string;

  constructor(private http: HttpClient, private router: Router, private cookieService: CookieService) { }

  public ngOnInit(): void {

  }


  get isLoggedIn() {
    this.userCookie = this.cookieService.get('ecom-user-info');
    return this.userCookie || null;
  }

  login(user) {
    this.http.post<User>('http://localhost:8080/api/user/login', user).subscribe(response => {
      console.log(response);
      this.router.navigate(['/home']);
    })
  };

  register(user) {
    this.http.post<User>('http://localhost:8080/api/user/register', user).subscribe(response => {
      console.log(response);
    })
  };

  logout() {
    this.http.get('http://localhost:8080/api/user/logout', { responseType: 'text' }).subscribe();
  };
}
