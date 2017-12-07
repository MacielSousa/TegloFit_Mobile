import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { PesagemPage } from '../pesagem/pesagem';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { LoginPage } from '../login/login';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage(
 { name:"cadastrar" }
)


@Component({
  selector: 'page-cadastrar',
  templateUrl: 'cadastrar.html',
  providers: [AuthServiceProvider]
})
export class CadastrarPage {
  private pessoa : FormGroup;
  private erroSenha = null;
  constructor(public navCtrl: NavController, public menu:MenuController,   public navParams: NavParams, private AuthServiceProvider:AuthServiceProvider, private formBuilder: FormBuilder, public alertCtrl: AlertController) {
      this.menu.swipeEnable(false);
      this.pessoa = this.formBuilder.group({
        nome: ['', Validators.required],
        dtNascimento: ['', Validators.required],
        sexo: ['', Validators.required],
        email: ['', Validators.required],
        senha: ['', Validators.required],
        confirmarSenha:['', Validators.required]
      });
  }

  Cadastrar(){
    this.verificarSenha();
  }

  clear(){
    this.pessoa = this.formBuilder.group({
      nome: ['', Validators.required],
      dtNascimento: ['', Validators.required],
      sexo: ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', Validators.required],
      confirmarSenha:['', Validators.required]
    });
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastrarPage');
  }

  openLogin(){
    this.navCtrl.push(LoginPage);
  }

  verificarSenha(){
    if(this.pessoa.value.senha == this.pessoa.value.confirmarSenha){

      this.showSucesso();
      console.log(this.pessoa.value.nome)
      this.openLogin();
      this.clear();

    }else{
      this.showErro();
      console.log('Senha incompatível!')
    }
  }

  showSucesso() {
    let alert = this.alertCtrl.create({
      title: this.pessoa.value.nome,
      subTitle: 'Conta cadastrada com sucesso!',
      message: "Usuário:" +this.pessoa.value.email+" Senha:********",
      buttons: ['OK']
    });
    alert.present();
  }

  showErro() {
    let alert = this.alertCtrl.create({
      title: 'Senha!',
      subTitle: 'Senha incompatível!',
      buttons: ['OK']
    });
    alert.present();
  }

}

