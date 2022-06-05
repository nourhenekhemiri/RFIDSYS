import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/cart.service';

@Component({
  selector: 'app-etiquette',
  templateUrl: './etiquette.component.html',
  styleUrls: ['./etiquette.component.css']
})
export class EtiquetteComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private cartService : CartService
  ) { }
  produits : any;
  ngOnInit(): void {
    this.http.get('http://localhost:3000/api/prosecurites/getByCategory/etiquette').subscribe(
      (data) => {
        this.produits = data;
      }
    )
  }
  addToCart(item){
    this.cartService.addToCart(item);
  }
}
