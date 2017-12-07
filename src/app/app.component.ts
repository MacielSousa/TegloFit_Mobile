import { Component, ViewChild } from '@angular/core';
import { Nav, Platform,  App, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AuthGuardProvider } from '../providers/auth-guard/auth-guard';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';



@Component({
  selector: 'page-app',
  templateUrl: 'app.html',
  providers: [AuthGuardProvider,AuthServiceProvider]
})
export class MyApp {
 
  @ViewChild(Nav) nav: Nav; 

  pages: Array<{title: string, component: any}>;

  rootPage: any = LoginPage;

  canActivate(){
    return this.AuthGuard.canActivate()
  }   

  constructor(public AuthServiceProvider:AuthServiceProvider, public app: App, public menu: MenuController, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private AuthGuard:AuthGuardProvider) {
    this.initializeApp();
    //this.loadMenu();
    this.loadMenu()
    this.menu.enable(true);
    // used for an example of ngFor and navigation
  }


  loadMenu(){
     this.pages = [
            { title: 'Principal', component: HomePage },
            { title: 'Menu2', component: HomePage },
            { title: 'Menu3', component: HomePage },
            { title: 'Menu4', component: HomePage },
     ];
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

 sair(){
    this.AuthServiceProvider.logout()
    this.app.getRootNav().setRoot(LoginPage);
 }

}
