import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/shared/interfaces';
import { UserService } from 'src/app/pages/user/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-component',
  templateUrl: './category-component.component.html',
  styleUrls: ['./category-component.component.scss']
})
export class CategoryComponentComponent implements OnInit {
  @Input() category: Category;

  constructor(private userService: UserService, private http: HttpClient, private router: Router) { }
  user: any

  get isLoggedIn() {
    this.user = JSON.parse(this.userService.isLoggedIn);
    return !!this.userService.isLoggedIn;
  }

  ngOnInit() {
  }

  deleteCategory(webId) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        _id: webId
      },
      withcredentials: true
    };
    this.http.delete('http://localhost:8080/api/categories/delete', options).subscribe();
    this.router.navigate(['/home']);

  }
}
