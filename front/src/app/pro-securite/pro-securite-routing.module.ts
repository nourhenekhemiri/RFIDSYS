import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProsecuriteComponent } from './pro-securite.component';
import { DetailSecuriteComponent } from './detail-securite/detail-securite.component';


import { MaterialModule } from '../material/material.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [{ path: '', component: ProsecuriteComponent },
{path:':id',component:DetailSecuriteComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes),
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  
  ],
  exports: [
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
   DetailSecuriteComponent
  ]
})
export class ProSecuriteRoutingModule { }
