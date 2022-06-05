import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecuriteRoutingModule } from './securite-routing.module';
import { SecuriteComponent } from './securite.component';
import { CadnatComponent } from './cadnat/cadnat.component';
import { DetecteurComponent } from './detecteur/detecteur.component';
import { BloqueurComponent } from './bloqueur/bloqueur.component';
import { SurveillanceComponent } from './surveillance/surveillance.component';



@NgModule({
  declarations: [
    SecuriteComponent,
    CadnatComponent,
    DetecteurComponent,
    BloqueurComponent,
    SurveillanceComponent

  ],
  imports: [
    CommonModule,
    SecuriteRoutingModule
  ]
})
export class SecuriteModule { }
