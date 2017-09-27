import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NfcPage } from "../nfc/nfc";

@IonicPage()
@Component({
  selector: 'page-drink',
  templateUrl: 'drink.html',
})
export class DrinkPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  goToNfcPage() {
    this.navCtrl.push(NfcPage);
  }
}
