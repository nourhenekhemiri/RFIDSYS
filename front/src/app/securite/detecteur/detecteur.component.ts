import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/cart.service';

@Component({
  selector: 'app-detecteur',
  templateUrl: './detecteur.component.html',
  styleUrls: ['./detecteur.component.css']
})
export class DetecteurComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private cartService : CartService

  ) { }
  produits : any;
  ngOnInit(): void {
    this.http.get('http://localhost:3000/api/prosecurites/getByCategory/detecteur').subscribe(
      (data) => {
        this.produits = data;
      }
    )
  }

  addToCart(item){
    this.cartService.addToCart(item);
  }
}
