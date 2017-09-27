import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DrinkPage } from './drink';

@NgModule({
  declarations: [
    DrinkPage,
  ],
  imports: [
    IonicPageModule.forChild(DrinkPage),
  ],
  exports: [
    DrinkPage
  ]
})
export class DrinkPageModule {}
