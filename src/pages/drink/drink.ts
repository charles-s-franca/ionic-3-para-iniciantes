import { Firedata } from './../../providers/firedata';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NfcPage } from "../nfc/nfc";

@IonicPage()
@Component({
  selector: 'page-drink',
  templateUrl: 'drink.html',
  providers:[Firedata]
})
export class DrinkPage {

  public lista_drinks 
  public fila_drinks
  public pos_bebidas
  public pos_bebidas_array
  public item = {} 

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public db: Firedata
             ) {
                this.lista_drinks = this.db.listDrinks(); // * Lista de Bebidas a serem oferecidas na escolha
                this.fila_drinks= this.db.filaDrinks() // * Pedidos feito por usuarios
                this.pos_bebidas= this.db.posBebidas() // * Pedidos feito por usuarios
                console.log("#### ")
                // console.log(this.lista_drinks)
            
              //   console.log(this.fila_drinks)
                console.log("#### ")


  }
  ionViewDidLoad(){
    // console.log(this.db.listAccounts()); 
    // this.lista_filmes = this.db.listAccounts()
    console.log(" buscando as posicoes das garrafas")
    console.log(this.pos_bebidas)
   //  this.pos_bebidas
   //         .map(i=>{
   //               console.log(i)
   //               return i}
   //             );
  var controle = []
               let items= this.pos_bebidas.map(i=>{
                 console.log(i)
                 controle.push(i)
                 return i});
               items
                 .forEach(i=>i
                       .forEach(e=>(
                         console.log(controle)
                 
                               )
                       ) 
                 )
 
               // setTimeout(function() {
               //   console.log(controle)
               // }, 2000);
               
    console.log(" buscando as posicoes das garrafas")
    
   }
   saveItem(item) {
    console.log(item);
   // console.log(controle)

    const promise =  this.fila_drinks.push({
        tagid: item.itemName,
        bebida1: item.itemDescription,
        bebida2: item.itemDescription,
        bebida3: item.itemDescription,
        valor: Number(item.itemNumber),
        timestamp: Date.now()
    });
    promise
        .then(_ =>{
              
          })
        .then(_ => {
            console.log('Added Item');
            this.item = {} ;
           // this.navCtrl.pop();
        } )
        .catch(err => console.log(err, 'Error Adding Item'));



  }
  goToNfcPage() {
    this.navCtrl.push(NfcPage);
  }
}
