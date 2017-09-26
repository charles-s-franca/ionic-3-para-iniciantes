import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { NFC, Ndef } from '@ionic-native/nfc';

@Injectable()
export class NfcProvider {

  constructor(private nfc: NFC, private ndef: Ndef) {
    console.log('Hello NfcProvider Provider');
  }

  readNfcDevice() {
    this.nfc.addNdefListener(() => {
      console.log('successfully attached ndef listener');
    }, (err) => {
      console.log('error attaching ndef listener', err);
    }).subscribe((event) => {
      console.log('received ndef message. the tag contains: ', event.tag);
      console.log('decoded tag id', this.nfc.bytesToHexString(event.tag.id));
    });
  }
}
