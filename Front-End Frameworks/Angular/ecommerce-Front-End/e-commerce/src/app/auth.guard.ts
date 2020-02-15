import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './pages/user/user.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanLoad {

  constructor(private userService: UserService, private router: Router) { }
  canLoad(
    route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {

    if (!this.userService.isLoggedIn) {
      console.log('guard');
      this.router.navigateByUrl('login-register');
      return false;
    }
    return true
  }
}
