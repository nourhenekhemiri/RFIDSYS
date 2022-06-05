import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DetailComponent } from './detail/detail.component';

import { CartComponent } from './cart/cart.component';

import { CalendrierComponent } from './calendrier/calendrier.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientsRequestsComponent } from './clients-requests/clients-requests.component';
import { IsAdminGuard } from './guard/is-admin.guard';
import { RdvPendingComponent } from './rdv-pending/rdv-pending.component';
import { RdvAccepterComponent } from './rdv-accepter/rdv-accepter.component';
import { SidenavUserComponent } from './sidenav-user/sidenav-user.component';
import { RdvUserComponent } from './rdv-user/rdv-user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SecuriteAjoutComponent } from './securite-ajout/securite-ajout.component';
import { DemandesDevisComponent } from './demandes-devis/demandes-devis.component';

const routes: Routes =[
  // {path:'',component:HomeComponent},

  {path:'', redirectTo:'/nav', pathMatch:'full'},

  {path:'detail',component:DetailComponent},
  {path : 'nav',component:NavbarComponent , children:[
    {path:'',component:HomeComponent},
    {path:'cart',component:CartComponent},
    {path:'contact',component:ContactComponent},
    {path: 'securite', loadChildren: () => import('./securite/securite.module').then(m => m.SecuriteModule) },
    {path: 'produit', loadChildren: () => import('./produit/produit.module').then(m => m.ProduitModule) },
    {path : 'user' , component : SidenavUserComponent, children:[
      {path : 'profile', component : ProfileComponent},
      {path : 'rdv', component : RdvUserComponent}
    ]},
    {path : 'admin' , component: SidebarComponent ,canActivate :[IsAdminGuard], children:[
      {path : 'profile' , component : ProfileComponent},
      {path : 'dashboard' , component : DashboardComponent},
      {path : 'clients' , component : ClientsComponent},
      {path : 'clients-requests' , component : ClientsRequestsComponent},
      {path : 'rdv-en-attente' , component : RdvPendingComponent},
      {path : 'rdv-accepter' , component : RdvAccepterComponent},
      {path:'securiteadd',component:SecuriteAjoutComponent},
      {path:'demande-devis',component:DemandesDevisComponent},

    ]},
  ]},

  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },

  // { path: 'securite', loadChildren: () => import('./securite/securite.module').then(m => m.SecuriteModule) },
  // { path: 'produit', loadChildren: () => import('./produit/produit.module').then(m => m.ProduitModule) },
  // {path : 'user' , component : SidenavUserComponent, children:[
  //   {path : 'profile', component : ProfileComponent},
  //   {path : 'rdv', component : RdvUserComponent}
  // ]},
  // {path : 'admin' , component: SidebarComponent ,canActivate :[IsAdminGuard], children:[
  //   {path : 'profile' , component : ProfileComponent},
  //   {path : 'dashboard' , component : DashboardComponent},
  //   {path : 'clients' , component : ClientsComponent},
  //   {path : 'clients-requests' , component : ClientsRequestsComponent},
  //   {path : 'rdv-en-attente' , component : RdvPendingComponent},
  //   {path : 'rdv-accepter' , component : RdvAccepterComponent},
  // ]},



  { path: 'pro-securite', loadChildren: () => import('./pro-securite/pro-securite.module').then(m => m.ProSecuriteModule) },

  {path:'**',component:NotFoundComponent},
  {path:'calendrier',component:CalendrierComponent}

];


@NgModule({
  imports:[RouterModule.forRoot(routes),
  ReactiveFormsModule,
FormsModule,

],
  exports:[RouterModule],
  declarations: [
    ContactComponent,
    NotFoundComponent

  ]
})
export class AppRoutingModule { }
