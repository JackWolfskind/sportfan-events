import { SocialLoginModule, AuthServiceConfig, LoginOpt } from "angularx-social-login";

import { GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider} from "angularx-social-login";
 
  
  const googleLoginOptions: LoginOpt = {
    scope: 'profile'
  }; // https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiauth2clientconfig
  

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("338860106235-oobq44uu11dkscbr8thifqdbgu703p18.apps.googleusercontent.com", googleLoginOptions)
  }
]);
 
export function provideConfig() {
  return config;
}