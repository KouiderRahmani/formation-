import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private afAuth: AngularFireAuth, private route: Router) {

  }

  canActivate(): Observable<boolean> {
    return this.afAuth.authState.pipe(map(auth => {
      if (!auth) {
        this.route.navigate(['/login']);
        return false;
      } else {
        return true;
      }
    }));
  }
}
