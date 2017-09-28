import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the Firedata provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Firedata {

  constructor(private _af: AngularFireDatabase) {
    console.log('Hello Firedata Provider');
  }
  public listDrinks(): FirebaseListObservable<any[]>{
    return this._af.list('https://barionic-bd6fd.firebaseio.com/listadrinks') // Receita das bebidas
  }
  public filaDrinks(): FirebaseListObservable<any[]>{
    return this._af.list('https://barionic-bd6fd.firebaseio.com/fila')
  }
  public posBebidas(): FirebaseListObservable<any[]>{
    return this._af.list('https://barionic-bd6fd.firebaseio.com/Bebidas')



  }
}
