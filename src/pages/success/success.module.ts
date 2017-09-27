import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SuccessPage } from './success';

@NgModule({
  declarations: [
    SuccessPage,
  ],
  imports: [
    IonicPageModule.forChild(SuccessPage),
  ],
  exports: [
    SuccessPage
  ]
})
export class SuccessPageModule {}
