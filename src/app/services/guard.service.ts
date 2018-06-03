import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router,
    CanActivateChild
  } from '@angular/router';
  import { Observable } from 'rxjs';
  import { Injectable } from '@angular/core';
  
  
 @Injectable()
  export class Guard implements CanActivate {
    constructor(private router: Router) {}
  
    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
                    console.log(route);
        const pattern = /^[0-9]{4,9}$/;
        if (pattern.test(route.params.salary)) {
            return true;
        } else {
            this.router.navigate(['/']);
        }       
    }
  }
  