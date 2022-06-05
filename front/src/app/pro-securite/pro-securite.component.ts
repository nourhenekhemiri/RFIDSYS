import { Component, OnInit } from '@angular/core';
import {voitures} from "./../voiture-list";
import { voiture } from "./../voiture.model";
import{securites} from "./../securite-list";
import { securite } from '../securite.model';
import { prosecuritemodel } from './prosecuritemodel.model';
import { LocalStorageService } from 'src/app/shared/local-storage.service';
import { FavService } from 'src/app/shared/fav.service';
import { NotificationService } from '../shared/notification.service';

import { SecuriteService } from '../shared/securite.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RentrdvService } from '../shared/rdv.service';


@Component({
  selector: 'app-pro-securite',
  templateUrl: './pro-securite.component.html',
  styleUrls: ['./pro-securite.component.css']
})
export class ProsecuriteComponent implements OnInit {
  public securitesList: any = [];
  public favContent: any[]= [];
  public formValue: FormGroup;
  prosecuritemodel: prosecuritemodel = new prosecuritemodel();
  constructor(
    private favService: FavService , 
    private notificationService : NotificationService , 
    private securiteService: SecuriteService,
    private rdvservice: RentrdvService,
    private formBuilder:FormBuilder,
    public router:Router     ) 
    {
      this.formValue = this.formBuilder.group({
        Nom_Voiture: [''],
        Nom_utilisateur: [''],
        email: [''],
        Date_debut: [''],
        Date_fin: [''],
      });
     }
  ngOnInit(): void {
        //this.favContent = this.localStorageService.get('fav');
this.getsecurites();
  }
  

 getsecurites() {

  this.securiteService.getsecurites().subscribe(
    res => this.securitesList = res);
 }
  public addTofav(_id: string):void {
    this.favService.add(_id);
    this.notificationService.success('! Add successfully');
}

public addSecurite() {
  this.rdvservice.create(this.formValue.value).subscribe(()=>{
      this.formValue.reset();
      this.securiteService.initializeFormGroup();
      this.notificationService.success('! Add successfully');
       this.getsecurites();
       this.reloadPage();
  })
    }

onEditSecurite(securite: any) {
  this.prosecuritemodel._id = securite._id;
  this.formValue.controls['Nom_Securite'].setValue(securite.title);
}

reloadPage() {
  setTimeout(()=>{
      window.location.reload();
    }, 1000);  
}

}
