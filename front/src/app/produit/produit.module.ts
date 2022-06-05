import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProduitRoutingModule } from './produit-routing.module';
import { ProduitComponent } from './produit.component';
import { ControleComponent } from './controle/controle.component';
import { TagComponent } from './tag/tag.component';
import { CarteComponent } from './carte/carte.component';
import { EtiquetteComponent } from './etiquette/etiquette.component';
import { BraceletComponent } from './bracelet/bracelet.component';
import { LecteurComponent } from './lecteur/lecteur.component';
import { AntenneComponent } from './antenne/antenne.component';
import { NfcComponent } from './nfc/nfc.component';


@NgModule({
  declarations: [
    ProduitComponent,
    ControleComponent,
    TagComponent,
    CarteComponent,
    EtiquetteComponent,
    BraceletComponent,
    LecteurComponent,
    AntenneComponent,
    NfcComponent
    
  ],
  imports: [
    CommonModule,
    ProduitRoutingModule
  ]
})
export class ProduitModule { }
