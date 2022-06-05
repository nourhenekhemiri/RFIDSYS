import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Client } from '../client.model';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  constructor(private http : HttpClient) { }
  displayedColumns: string[] = [ 'Nom', 'Email','city','job','actions'];
  clients : Client[] = [];
  datasource = new MatTableDataSource<any>(this.clients)
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  showspinner=false;

  ngAfterViewInit() {
    this.datasource.paginator = this.paginator;
    this.datasource.sort = this.sort;
  }

  ngOnInit(): void {
    this.datasource.sort = this.sort;
    this.datasource.paginator = this.paginator;
    this.getClients();
  }

  getClients(){

    this.http.get('http://localhost:3000/api/auth/getAllUsers').subscribe((res:any)=>{
      this.datasource.data = res;
    });
  }

  deleteClient(id){
    this.http.delete('http://localhost:3000/api/auth/deleteUser/'+id).subscribe((res:any)=>{
      this.getClients();
    });

  }

  spinner(){
    this.showspinner=true;
    setTimeout(() => {this.showspinner=false;},1000)
  }
}
