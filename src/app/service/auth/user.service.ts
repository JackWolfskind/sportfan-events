import { Injectable, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';

export class UserServiceConfig {
  user: SocialUser;
  isLoggedIn: boolean;
  authService: AuthService;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private router: Router, private authService: AuthService, @Optional() config: UserServiceConfig) {
    if (config) {
      this.user = config.user;
      this.isLoggedIn = config.isLoggedIn;
      this.authService = config.authService;
    }
  }

  public user: SocialUser;
  public isLoggedIn: boolean = false;

  public signInWithGoogle(): Promise<SocialUser> {
    return this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): Promise<any> {
    return this.authService.signOut();
  }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.isLoggedIn = (user !== null);
    });
  }

}
