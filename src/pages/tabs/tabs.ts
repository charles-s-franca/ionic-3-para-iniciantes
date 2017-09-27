import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { FeedPage } from "../feed/feed";
import { NfcPage } from "../nfc/nfc";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = NfcPage;
  tab4Root = FeedPage;

  constructor() {

  }
}
