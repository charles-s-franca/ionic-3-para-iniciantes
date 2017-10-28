import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilmeDetalhesPage } from './filme-detalhes';

@NgModule({
  declarations: [
    FilmeDetalhesPage,
  ],
  imports: [
    IonicPageModule.forChild(FilmeDetalhesPage),
  ],
  exports: [
    FilmeDetalhesPage
  ]
})
export class FilmeDetalhesPageModule {}
