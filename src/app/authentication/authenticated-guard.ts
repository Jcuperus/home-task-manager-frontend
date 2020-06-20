import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthenticatedGuard implements CanActivateChild {
    constructor(private authenticationService: AuthenticationService) {}

    canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.authenticationService.getToken() != null;
    }
}