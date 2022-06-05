import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-securite-ajout',
  templateUrl: './securite-ajout.component.html',
  styleUrls: ['./securite-ajout.component.css']
})
export class SecuriteAjoutComponent implements OnInit {

  constructor(
    private http:HttpClient
  ) { }
  categories = [
    {value: 'antenne', viewValue: 'Antenne'},
    {value: 'bracelet', viewValue: 'Bracelet'},
    {value: 'carte', viewValue: 'Carte'},
    {value: 'controle', viewValue: 'Controle'},
    {value: 'etiquette', viewValue: 'Etiquette'},
    {value: 'lecteur', viewValue: 'Lecteur'},
    {value: 'nfc', viewValue: 'NFC'},
    {value: 'tag', viewValue: 'Tag'},
    {value: 'bloquer', viewValue: 'Bloquer'},
    {value: 'cadnat', viewValue: 'Cadnat'},
    {value: 'detecteur', viewValue: 'Detecteur'},
    {value: 'surveillance', viewValue: 'Surveillance'},

  ];
  form : FormGroup;
  displayedColumns: string[] = [ 'title', 'description','image','price','category','actions'];
  produits : any[] = [];
  datasource = new MatTableDataSource<any>(this.produits)
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.datasource.paginator = this.paginator;
    this.datasource.sort = this.sort;
  }

  ngOnInit(): void {
    this.datasource.sort = this.sort;
    this.datasource.paginator = this.paginator;
    this.getProduits();
    this.form = new FormGroup({
      title: new FormControl(),
      description: new FormControl(),
      image: new FormControl(),
      price: new FormControl(),
      category: new FormControl()
    });
  }

  onFilePicked(event: Event){
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({image: file});
    this.form.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.readAsDataURL(file);
  }

  onSubmit(){
    var data = new FormData();
    data.append('title', this.form.value.title);
    data.append('description', this.form.value.description);
    data.append('image', this.form.value.image);
    data.append('price', this.form.value.price);
    data.append('category', this.form.value.category);

    this.http.post('http://localhost:3000/api/prosecurites/',data).subscribe((res:any)=>{
      this.getProduits();
      this.form.reset();
    });
  }

  onDelete(id){
    this.http.delete('http://localhost:3000/api/prosecurites/'+id).subscribe((res:any)=>{
      this.getProduits();
    });
  }
  getProduits(){
    this.http.get('http://localhost:3000/api/prosecurites/').subscribe((res:any)=>{
      this.datasource.data = res;
    });
  }

}
