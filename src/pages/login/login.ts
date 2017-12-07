import { Component, ViewChild } from '@angular/core';
import { Nav, IonicPage, NavController, NavParams, AlertController, App } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { AuthGuardProvider } from '../../providers/auth-guard/auth-guard';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { HomePage } from '../../pages/home/home'
import { CadastrarPage } from '../cadastrar/cadastrar';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage({
  name: "login"
})


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers:[AuthGuardProvider,AuthServiceProvider]
})
export class LoginPage {
  @ViewChild(Nav) nav: Nav;
  
  private form : FormGroup;  
   

  constructor(public app:App, public navCtrl: NavController , private AuthGuard:AuthGuardProvider , private formBuilder: FormBuilder, private storage: Storage, public alertCtrl: AlertController, private AuthServiceProvider:AuthServiceProvider ) {
    this.loadForm()
  }


  ngOnInit() {
     /*if( this.AuthGuard.canActivate() ){
          this.navCtrl.push(HomePage);
     }*/
  }
     

  

  loadForm(){
    this.form = this.formBuilder.group({
      usuario: ['', Validators.required],
      senha: ['', Validators.required],
    });
  }

  logForm(){
    console.log(this.form.value)
  
    this.storage.get('usuario').then((val) => {
        if(val.usuario == this.form.value.usuario && val.senha == this.form.value.senha){
            this.AuthServiceProvider.logon(this.form.value.usuario)
            //this.navCtrl.push("home")
            this.app.getRootNav().setRoot(HomePage);
        }else{
            let alert = this.alertCtrl.create({
            title: 'Ops!',
            subTitle: "Usuário ou Senha incorreto.",
            buttons: ['OK']
            });
            alert.present();
        }
  });

  

    
  }

  cadastrar(){
      this.storage.set('usuario', {usuario:"teste" , senha:"teste"});
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  openCadastrar(){
    this.navCtrl.push(CadastrarPage);
  }

}
