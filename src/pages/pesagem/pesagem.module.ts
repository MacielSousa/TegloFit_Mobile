import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PesagemPage } from './pesagem';

@NgModule({
  declarations: [
    PesagemPage,
  ],
  imports: [
    IonicPageModule.forChild(PesagemPage),
  ],
})
export class PesagemPageModule {}
