import { Component } from '@angular/core';
import { Firedata } from './../../providers/firedata';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { NFC } from "@ionic-native/nfc";
import { Subscription } from 'rxjs/Subscription';
import { SuccessPage } from "../success/success";

@IonicPage()
@Component({
  selector: 'page-nfc',
  templateUrl: 'nfc.html',
  providers: [NFC, Firedata]
})
export class NfcPage {

  subscriptions: Array<Subscription> = new Array<Subscription>();
  public lista_drinks
  public fila_drinks
  public pos_bebidas
  public pos_bebidas_array
  public item = {}

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private nfc: NFC,
    public platform: Platform,
    public db: Firedata
  ) {
    platform.ready().then(() => {
      this.initNFC();

      this.lista_drinks = this.db.listDrinks(); // * Lista de Bebidas a serem oferecidas na escolha
      this.fila_drinks= this.db.filaDrinks() // * Pedidos feito por usuarios
      this.pos_bebidas= this.db.posBebidas() // * Pedidos feito por usuarios
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
      this.navCtrl.push(SuccessPage);
    }));
  }

  ionViewWillLeave() {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }





}
