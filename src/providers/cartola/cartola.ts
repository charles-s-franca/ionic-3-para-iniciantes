import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Platform } from 'ionic-angular';

/*
  Generated class for the CartolaProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CartolaProvider {
  basepath = "/cartolaapi"
  constructor(
    public http: Http,
    private _platform: Platform
  ) {
    if(this._platform.is("cordova")){
      this.basepath = "https://api.cartolafc.globo.com";
    }
  }

  atletas(){
    return this.http.get(`${this.basepath}/atletas/mercado`);
  }

}
