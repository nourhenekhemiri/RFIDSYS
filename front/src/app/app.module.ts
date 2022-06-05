import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';

import { DetailComponent } from './detail/detail.component';
import { DetecteurComponent } from './detecteur/detecteur.component';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartComponent } from './cart/cart.component';

import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';

import { MaterialModule } from './material/material.module';



import { MatDialogRef } from '@angular/material/dialog';

import { DatePipe } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';


import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import { CalendrierComponent } from './calendrier/calendrier.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientsRequestsComponent } from './clients-requests/clients-requests.component';
import { RdvPendingComponent } from './rdv-pending/rdv-pending.component';
import { RdvAccepterComponent } from './rdv-accepter/rdv-accepter.component';
import { SidenavUserComponent } from './sidenav-user/sidenav-user.component';
import { RdvUserComponent } from './rdv-user/rdv-user.component';
import { SecuriteAjoutComponent } from './securite-ajout/securite-ajout.component';
import { DemandesDevisComponent } from './demandes-devis/demandes-devis.component';
import { DemandesDevisDetailsComponent } from './demandes-devis-details/demandes-devis-details.component';
import {ChartModule} from 'primeng/chart';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DetailComponent,
    DetecteurComponent,

    CartComponent,
    MatConfirmDialogComponent,
    MatConfirmDialogComponent,
    CalendrierComponent,
    HomeComponent,
    SidebarComponent,
    DashboardComponent,
    ProfileComponent,
    ClientsComponent,
    ClientsRequestsComponent,
    RdvPendingComponent,
    RdvAccepterComponent,
    SidenavUserComponent,
    RdvUserComponent,
    SecuriteAjoutComponent,
    DemandesDevisComponent,
    DemandesDevisDetailsComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FullCalendarModule,
    MatPaginatorModule,
    MatTableModule,
    MaterialModule,
    ChartModule
  ],

exports:[MaterialModule],
  providers: [
    {provide: MatDialogRef, useValue: {close: (_dialogResult: any) => { }} },
    DatePipe],

  bootstrap: [AppComponent]})
export class AppModule { }

