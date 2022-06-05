import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/cart.service';

@Component({
  selector: 'app-lecteur',
  templateUrl: './lecteur.component.html',
  styleUrls: ['./lecteur.component.css']
})
export class LecteurComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private cartService : CartService
  ) { }
  produits : any;
  ngOnInit(): void {
    this.http.get('http://localhost:3000/api/prosecurites/getByCategory/lecteur').subscribe(
      (data) => {
        this.produits = data;
      }
    )
  }
  addToCart(item){
    this.cartService.addToCart(item);
  }

}
