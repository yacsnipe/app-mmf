import {inject, Injectable} from "@angular/core";
import {getAuth} from "firebase/auth";
import {Permission} from "../models/permission";
import {ActivatedRouteSnapshot, CanActivateChildFn, CanActivateFn, Router, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "./auth.service";
import {catchError, map, of} from "rxjs";

@Injectable({providedIn: 'root'})
export class PermissionService {
  auth = getAuth();

  isAllowed(permissions: Permission[]): boolean {
    const user = this.auth.currentUser;
    return true// permissions.includes(user?.providerData[0].uid);
  }

}

/*export const canMatch = (permissions: Permission[], permissionService = inject(PermissionService)) =>
  permissionService.isAllowed(permissions);*/
export const canActivate: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isSignedIn().pipe(
    map(() => true),
    catchError(() => {
      router.navigate(['dashboard-view']).then();
      return of(false);
    })
  );
};
export const canActivateChild: CanActivateChildFn = (route: ActivatedRouteSnapshot,
                                                     state: RouterStateSnapshot) => canActivate(route, state);
