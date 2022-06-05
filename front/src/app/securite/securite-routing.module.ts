import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecuriteComponent } from './securite.component';
import { CadnatComponent } from './cadnat/cadnat.component';
import { DetecteurComponent } from './detecteur/detecteur.component';
import { BloqueurComponent } from './bloqueur/bloqueur.component';
import { SurveillanceComponent } from './surveillance/surveillance.component';


const routes: Routes = [
  { path: '', component: SecuriteComponent },
  {path:'cadnat',component:CadnatComponent},
  {path:'detecteur',component:DetecteurComponent},
  {path:'bloqueur',component:BloqueurComponent},
  {path:'surveillance',component:SurveillanceComponent}
 
  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecuriteRoutingModule { }
