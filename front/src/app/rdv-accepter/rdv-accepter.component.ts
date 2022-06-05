import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-rdv-accepter',
  templateUrl: './rdv-accepter.component.html',
  styleUrls: ['./rdv-accepter.component.css']
})
export class RdvAccepterComponent implements OnInit {

  constructor(private http : HttpClient) { }
  displayedColumns: string[] = [ 'Nom', 'Email','date','type'];

  rdvs : any[] = [];
  datasource = new MatTableDataSource<any>(this.rdvs)
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.datasource.paginator = this.paginator;
    this.datasource.sort = this.sort;
  }

  ngOnInit(): void {
    this.getRdvs();
  }

  getRdvs(){
    this.http.get('http://localhost:3000/api/rdv/getAccepted').subscribe((res:any)=>{
      this.datasource.data = res;
    });
  }




}
