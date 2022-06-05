import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-rdv-pending',
  templateUrl: './rdv-pending.component.html',
  styleUrls: ['./rdv-pending.component.css']
})
export class RdvPendingComponent implements OnInit {

  constructor(private http : HttpClient) { }
  displayedColumns: string[] = [ 'Nom', 'Email','date','type','actions'];
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
    this.http.get('http://localhost:3000/api/rdv/getPending').subscribe((res:any)=>{
      this.datasource.data = res;
    });
  }

  acceptRdv(id){
    this.http.put('http://localhost:3000/api/rdv/acceptRDV/'+id,{}).subscribe((res:any)=>{
      this.getRdvs();
    });
  }
  declineRdv(id){
    this.http.delete('http://localhost:3000/api/rdv/deleteRDV/'+id).subscribe((res:any)=>{
      this.getRdvs();
    });
  }

}
