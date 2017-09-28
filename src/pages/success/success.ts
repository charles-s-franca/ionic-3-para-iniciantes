import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IntroPage } from "../intro/intro";
import { DrinkPage } from "../drink/drink";

@IonicPage()
@Component({
  selector: 'page-success',
  templateUrl: 'success.html',
})
export class SuccessPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  goToIntroPage() {
    this.navCtrl.push(IntroPage);
  }

  goToDrinkPage() {
    // TODO: limpar variável com o drink selecionado
    this.navCtrl.push(DrinkPage);
  }

  ionViewDidLoad() {
    setTimeout(() => {
      // TODO: limpar variável com o drink selecionado
      this.goToIntroPage();
    }, 5000);
  }

}
