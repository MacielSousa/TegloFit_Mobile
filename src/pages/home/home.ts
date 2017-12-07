import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { PesagemPage } from '../pesagem/pesagem';
/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage(
 { name:"home" }
)


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [AuthServiceProvider]
})
export class HomePage {
  
  constructor(public navCtrl: NavController, public menu:MenuController,   public navParams: NavParams, private AuthServiceProvider:AuthServiceProvider) {
      /*storage.set("value" , "teste")
      storage.get("valusde").then( (val)=>{
        console.log(val)
      })*/
      this.menu.swipeEnable(false);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }


  teste() {
      this.navCtrl.push('login');
  }

  sair(){
      this.AuthServiceProvider.logout()
      this.navCtrl.push("login")
  }

  openPesagem(){
    this.navCtrl.push(PesagemPage);
  }

}
