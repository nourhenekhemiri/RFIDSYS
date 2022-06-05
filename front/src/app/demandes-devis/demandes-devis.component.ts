import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DemandesDevisDetailsComponent } from '../demandes-devis-details/demandes-devis-details.component';

@Component({
  selector: 'app-demandes-devis',
  templateUrl: './demandes-devis.component.html',
  styleUrls: ['./demandes-devis.component.css']
})
export class DemandesDevisComponent implements OnInit {

  constructor(private http :HttpClient , private matDialog: MatDialog) { }
  displayedColumns: string[] = ['client','devis','actions'];
  demandes : any[] = [];
  datasource = new MatTableDataSource<any>(this.demandes)
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.datasource.paginator = this.paginator;
    this.datasource.sort = this.sort;
  }

  ngOnInit(): void {
    this.datasource.sort = this.sort;
    this.datasource.paginator = this.paginator;
    this.getDemandes();
  }

  getDemandes(){
    this.http.get('http://localhost:3000/api/demandeDevis/getAll').subscribe((res:any)=>{
      this.datasource.data = res;

    });
  }

  details(element){
    this.matDialog.open(DemandesDevisDetailsComponent,{
      data:element
    }).afterClosed().subscribe(res=>{
      this.getDemandes();
    });
  }
}
