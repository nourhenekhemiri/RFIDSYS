import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProSecuriteRoutingModule } from './pro-securite-routing.module';
import { ProsecuriteComponent } from './pro-securite.component';
import { MaterialModule } from '../material/material.module';
import { DetecteurComponent } from './detecteur/detecteur.component';


@NgModule({
  declarations: [
    ProsecuriteComponent,
    DetecteurComponent,
  
  ],
  imports: [
    CommonModule,
  
    MaterialModule,
    ProSecuriteRoutingModule
  ]
})
export class ProSecuriteModule { }
