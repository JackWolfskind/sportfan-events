import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private http: HttpClient) {}

    private observable: Observable<boolean>;

    canActivate(
        route: ActivatedRouteSnapshot,
    ) :Observable<boolean>|boolean {
        if (localStorage.getItem('isLoggedin') === 'true') {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}