import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { UserService } from '../pages/users/user.service';


@Injectable({
  providedIn: 'root',
})
export class LoggedGuard implements CanActivate {
  isLogged: boolean = false;
  constructor(private US: UserService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.US.getUserStatus((user: any) => {
      user ? this.router.navigate(['/contacts']) : (this.isLogged = user);
    });
    if (this.isLogged) return false;
    return true;
  }
}