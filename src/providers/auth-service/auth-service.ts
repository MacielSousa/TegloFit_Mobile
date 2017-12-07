import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {
  public token: string;


  constructor(public http: Http, public storage:Storage ) {
     console.log('Hello AuthServiceProvider Provider');
     /*var currentUser = JSON.parse(localStorage.getItem('currentUser'));
     this.token = currentUser && currentUser.token;*/
     storage.get("currentUser").then((val)=>{
         console.log(val)
     })

     //console.log(this.isSession)
  }


   getUser(){
        /*if (!this.loggedIn()) {
            return null;
        } else {
            let user = JSON.parse(localStorage.getItem('currentUser'));
            return user.username;
             return this.storage.get('currentUser').then( (val)=>{
                return val.username
             } )
        }*/
        return null
    }

    getToken() {
        if (!this.loggedIn()) {
            return null;
        } else {
            let user = JSON.parse(localStorage.getItem('currentUser'));
            return user.token;
        }
    }

    loggedIn():boolean {
        /*this.storage.get('currentUser').then((val) => {
            console.log('Your age is', val);
        });*/

        //console.log( this.storage.keys() )
 
       /*this.storage.keys().then( (value)=>{
           console.log(value)
       })*/

      return true
      
    }

    logon(username: string/*, password: string*/) {
        /*let body = JSON.stringify({"email": username, "password": password});
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        //noinspection TypeScriptUnresolvedFunction
        return this.http.post('https://fabrica.ulbra-to.br/sistema-eventos/backend/api/index.php/authentication', body, options)
            .map((response: Response) => {
                let token = response.json() && response.json().access_token;
                if (token) {
                    this.token = token;
                    console.log(token)
                    localStorage.setItem('currentUser', JSON.stringify({username: username, token: token}));
                    return true;
                } else {
                    return false;
                }
            })
            .catch(this.handleError);*/
            this.storage.set('currentUser', {username: username} );

    }

    logout(): void {
        this.token = null;
        this.storage.remove("currentUser")
        
    }

    /*private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }*/

}
