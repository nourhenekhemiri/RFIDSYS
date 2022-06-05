import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/cart.service';

@Component({
  selector: 'app-bracelet',
  templateUrl: './bracelet.component.html',
  styleUrls: ['./bracelet.component.css']
})
export class BraceletComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private cartService : CartService
  ) { }
  produits : any;
  ngOnInit(): void {
    this.http.get('http://localhost:3000/api/prosecurites/getByCategory/bracelet').subscribe(
      (data) => {
        this.produits = data;
      }
    )
  }
  addToCart(item){
    this.cartService.addToCart(item);
  }

}
