import { Router, CanLoad, UrlSegment, Route } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { Injectable } from '@angular/core';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class AuthGuard implements CanLoad {

    constructor(private authService: AuthService, private router: Router) {}

    canLoad(route: Route, segments: UrlSegment[])  {

        if(this.authService.isAuthenticated()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}