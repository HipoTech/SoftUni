import { Component, OnInit, Input } from '@angular/core';
import { Brand } from 'src/app/shared/interfaces/brand';
import { UserService } from 'src/app/pages/user/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brand-component',
  templateUrl: './brand-component.component.html',
  styleUrls: ['./brand-component.component.scss']
})
export class BrandComponentComponent implements OnInit {
  @Input() brand: Brand;

  constructor(private userService: UserService, private http: HttpClient, private router: Router) { }
  user: any

  get isLoggedIn() {
    this.user = JSON.parse(this.userService.isLoggedIn);
    return !!this.userService.isLoggedIn;
  }

  ngOnInit() {
  }

  deleteBrand(webId) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        _id: webId
      },
      withcredentials: true
    };
    this.http.delete('http://localhost:8080/api/brands/delete', options).subscribe();
    this.router.navigate(['/home']);

  }

}
