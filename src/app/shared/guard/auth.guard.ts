import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

import {UserService} from '../../service/auth/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private userService: UserService) {}

    canActivate() {
        if (this.userService.isLoggedIn) {
            return true;
        }
        return this.userService.signInWithGoogle().then((userData) => {
            return (userData !== null);
        });
        
    }
}
