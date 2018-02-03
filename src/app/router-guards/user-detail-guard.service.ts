import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { UserServiceService } from '../user-service/user-service.service';

@Injectable()
export class UserDetailGuardService implements CanActivate {
   constructor(
     private _router: Router,
     private _userService: UserServiceService) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const userName = route.params.userName;
    const users = this._userService.getUsers();
    const result = users.find(userObj => userObj.name === userName);

    if (result) {
      return true;
    } else {
      this._router.navigate(['/names']);
      return false;
    }
  }
}
