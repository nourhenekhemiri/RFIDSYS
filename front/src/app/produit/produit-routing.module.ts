import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitComponent } from './produit.component';
import { ControleComponent } from './controle/controle.component';
import { TagComponent } from './tag/tag.component';
import { CarteComponent } from './carte/carte.component';
import { EtiquetteComponent } from './etiquette/etiquette.component';
import { BraceletComponent } from './bracelet/bracelet.component';
import { LecteurComponent } from './lecteur/lecteur.component';
import { AntenneComponent } from './antenne/antenne.component';
import { NfcComponent } from './nfc/nfc.component';
const routes: Routes = [{ path: '', component: ProduitComponent },
                        { path: 'controle', component: ControleComponent},
                        { path: 'tag', component: TagComponent},
                        {path: 'carte', component: CarteComponent},
                        {path: 'etiquette', component: EtiquetteComponent},
                        {path: 'bracelet', component: BraceletComponent},
                        {path: 'lecteur', component: LecteurComponent},
                        {path: 'antenne', component: AntenneComponent},
                        {path: 'nfc', component: NfcComponent}
                       ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduitRoutingModule { }
