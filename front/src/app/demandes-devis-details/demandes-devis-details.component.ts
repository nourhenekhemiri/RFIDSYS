import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from '../shared/notification.service';

@Component({
  selector: 'app-demandes-devis-details',
  templateUrl: './demandes-devis-details.component.html',
  styleUrls: ['./demandes-devis-details.component.css']
})
export class DemandesDevisDetailsComponent implements OnInit {

  constructor(
    private dialogRef : MatDialogRef<DemandesDevisDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data : any,
    private http : HttpClient,
    private notificationService : NotificationService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.http.post('http://localhost:3000/api/demandeDevis/submitDevis', this.data).subscribe(res=>{
      this.notificationService.success('Devis envoyée avec succès');
      this.dialogRef.close();
    });
  }

}
