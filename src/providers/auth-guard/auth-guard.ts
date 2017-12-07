import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthServiceProvider } from '../auth-service/auth-service';
/*
  Generated class for the AuthGuardProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthGuardProvider {

  //@ViewChild(Nav) nav: Nav;
    constructor(private auth: AuthServiceProvider) {}

    canActivate() {
        if(this.auth.loggedIn()) {
            //console.log("Entrou")
            return true;
        } else {
            //this.navCtrl.push(LoginPage);
            return false;
        }
    }

}
