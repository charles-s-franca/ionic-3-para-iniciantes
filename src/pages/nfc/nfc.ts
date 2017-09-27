import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { NfcProvider } from "../../providers/nfc/nfc";
import { NFC, Ndef } from "@ionic-native/nfc";
import { Subscription } from 'rxjs/Subscription';

@IonicPage()
@Component({
  selector: 'page-nfc',
  templateUrl: 'nfc.html',
  providers: [NFC, Ndef]
})
export class NfcPage {

  subscriptions: Array<Subscription> = new Array<Subscription>();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private nfc: NFC,
    private ndef: Ndef,
    public platform: Platform,
  ) {
    platform.ready().then(() => {
      this.initNFC();
    });
  }

  initNFC() {
    this.nfc.enabled().then(() => {
      this.addListenNFC();
      console.log('NFC Reader iniciado!');
    }).catch(err => {
      console.error('ERRO:', err);
    });
  }

  addListenNFC() {
    this.subscriptions.push(this.nfc.addTagDiscoveredListener().subscribe(nfcData => {
      // TODO:
      //  - gravar dados no firebase
      //  - ir para pagina de pedido confirmado
      console.log('NFC Data:', nfcData);
    }));
  }
}
