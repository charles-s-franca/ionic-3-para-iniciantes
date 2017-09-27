import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NfcPage } from './nfc';

@NgModule({
  declarations: [
    NfcPage,
  ],
  imports: [
    IonicPageModule.forChild(NfcPage),
  ],
  exports: [
    NfcPage
  ]
})
export class NfcPageModule {}
