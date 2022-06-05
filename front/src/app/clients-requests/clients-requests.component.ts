import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NotificationService } from '../shared/notification.service';

@Component({
  selector: 'app-clients-requests',
  templateUrl: './clients-requests.component.html',
  styleUrls: ['./clients-requests.component.css']
})
export class ClientsRequestsComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private notification:NotificationService

  ) { }
  displayedColumns: string[] = ['nom','email','actions'];
  users : any[] = [];
  datasource = new MatTableDataSource<any>(this.users);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.getPendingUsers();
    this.datasource.sort = this.sort;
    this.datasource.paginator = this.paginator;
  }

  ngAfterViewInit() {
    this.datasource.paginator = this.paginator;
    this.datasource.sort = this.sort;
  }

  getPendingUsers(){
    this.http.get('http://localhost:3000/api/auth/getPendingUsers').subscribe((res:any)=>{
      this.datasource.data = res;
    });
  }

  acceptRequest(id){
    this.http.put('http://localhost:3000/api/auth/acceptRequest/'+id,{}).subscribe((res:any)=>{
      this.notification.success(':: user accepted successfully !');
      this.getPendingUsers();
    });
  }

  refuserRequest(id){
    this.http.delete('http://localhost:3000/api/auth/refuserRequest/'+id,{}).subscribe((res:any)=>{
      this.notification.success(':: user deleted successfully !');
      this.getPendingUsers();
    });
  }



}
