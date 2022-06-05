import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ChartOptions } from 'chart.js';
import { Client } from '../client.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  produits : any;
  constructor(
    private http : HttpClient
  ) { }


  chartOptions: any = {
    responsive: true,
    plugins: {
      legend : {
        position : 'bottom'
      }
    }

  };
  data : any;

  displayedColumns: string[] = [ 'title', 'description','image','price','category','nb_achat'];
  clients : Client[] = [];
  datasource = new MatTableDataSource<any>(this.clients)
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.initChart();
    this.datasource.sort = this.sort;
    this.datasource.paginator = this.paginator;
  }

  ngAfterViewInit() {
    this.datasource.paginator = this.paginator;
    this.datasource.sort = this.sort;
  }

  initChart(){
    this.http.get('http://localhost:3000/api/demandeDevis/getStats').subscribe((res:any)=>{
      this.datasource.data = res;
      this.produits = res;
      var labels = [];
      var data = [];
      this.produits.forEach(element => {
        labels.push(element.title);
        data.push(element.nb_achat);
      });
      this.data = {
        labels: labels,
        datasets: [
          {
            data: data,
            backgroundColor: [
              "#42A5F5",
              "#66BB6A",
              "#FFA726",
              "#FF7043",
              "#EF5350",
            ],
            hoverBackgroundColor: [
              "#64B5F6",
              "#81C784",
              "#FFB74D",
              "#FF8A65",
              "#E57373",

            ]
          }
        ]
      };


    })
  }

}
