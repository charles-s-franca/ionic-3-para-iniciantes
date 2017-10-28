import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AtletasPage } from './atletas';

@NgModule({
  declarations: [
    AtletasPage,
  ],
  imports: [
    IonicPageModule.forChild(AtletasPage),
  ],
  exports: [
    AtletasPage
  ]
})
export class AtletasPageModule {}
