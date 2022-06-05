import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { CartService } from '../shared/cart.service';
import { NotificationService } from '../shared/notification.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private auth :AuthService , private cartService : CartService , private http : HttpClient , private norificationService : NotificationService) { }

  ngOnInit(): void {
    this.CartDetails();
    // this.loadCart();
  }
  getCartDetails:any=[];

  // CartDetails(){
  //   if(localStorage.getItem('localCart')){
  //     this.getCartDetails = JSON.parse(localStorage.getItem('localCart')) ;
  //     console.log(JSON.parse(localStorage.getItem('localCart')));
  //     //check if there is duplicated items in the cart
  //     for(let i=0;i<this.getCartDetails.length;i++){
  //       for(let j=i+1;j<this.getCartDetails.length;j++){
  //         if(this.getCartDetails[i]._id == this.getCartDetails[j]._id){
  //           // this.getCartDetails[i].qnt = parseInt(this.getCartDetails[i].qnt) + 1;
  //           if (this.getCartDetails[i].qnt){
  //             this.getCartDetails[i].qnt = parseInt(this.getCartDetails[i].qnt) + 1;
  //           }
  //           else{
  //             this.getCartDetails[i].qnt = 1;
  //           }
  //           this.getCartDetails.splice(j,1);
  //           j--;
  //         }
  //       }
  //     }
  //     console.log(this.getCartDetails);


  //   }
  // }

  onSubmit(){
    const client = JSON.parse(localStorage.getItem('user')).id;
    const items = JSON.parse(localStorage.getItem('localCart'));
    // count the total price of the cart
    let devis = 0;
    for (let i = 0; i < items.length; i++) {
      devis += items[i].price;
    }

    this.http.post('http://localhost:3000/api/demandeDevis/',{client,items,devis}).subscribe(res=>{

      this.norificationService.success('Votre demande de devis a été envoyée avec succès');
    });


  }

  CartDetails(){
    this.getCartDetails = JSON.parse(localStorage.getItem('localCart'));
  }

  increaseQuantity(prod_id){
    // increase quantity in localstorage
    const cart = JSON.parse(localStorage.getItem('localCart'));
    for (let i = 0; i < cart.length; i++) {
      if (cart[i]._id === prod_id) {
        const itemPrice = cart[i].price / cart[i].quantity;
        cart[i].quantity++;
        cart[i].price = cart[i].price + itemPrice;
      }
    }
    localStorage.setItem('localCart', JSON.stringify(cart));
    this.CartDetails();
  }

  decreaseQuantity(prod_id){
    // decrease quantity in localstorage
    const cart = JSON.parse(localStorage.getItem('localCart'));
    for (let i = 0; i < cart.length; i++) {
      if (cart[i]._id === prod_id) {
        const itemPrice = cart[i].price / cart[i].quantity;
        cart[i].quantity--;
        cart[i].price = cart[i].price - itemPrice;
      }
    }
    localStorage.setItem('localCart', JSON.stringify(cart));
    this.CartDetails();
  }

  removeItem(itemId){
    const cart = JSON.parse(localStorage.getItem('localCart'));
    for (let i = 0; i < cart.length; i++) {
      if (cart[i]._id === itemId) {
        cart.splice(i, 1);
      }
    }
    localStorage.setItem('localCart', JSON.stringify(cart));
    this.CartDetails();
    this.cartService.countTheCart();
  }

  clearCart(){
    localStorage.removeItem('localCart');
    this.CartDetails();
    this.cartService.countTheCart();

  }


  //   incQnt(prodId:any,qnt:any){
  //    for(let i=0; i<this.getCartDetails.length;i++){
  //      if(this.getCartDetails[i].prodId === prodId){
  //        if(qnt != 5)
  //       this.getCartDetails[i].qnt = parseInt(qnt) + 1;

  //      }
  //    }
  //    localStorage.setItem('localCart',JSON.stringify(this.getCartDetails));

  //   }


  //   decQnt(prodId:any,qnt:any){
  //     for(let i=0; i<this.getCartDetails.length;i++){
  //       if(this.getCartDetails[i].prodId === prodId){
  //         if(qnt != 1)
  //        this.getCartDetails[i].qnt = parseInt(qnt) - 1;

  //       }
  //     }
  //     localStorage.setItem('localCart',JSON.stringify(this.getCartDetails));

  //    }
  //    total:number = 0;
  //    loadCart(){
  //      if(localStorage.getItem('localCart')){
  //        this.getCartDetails = JSON.parse(localStorage.getItem('localCart')!);
  //        this.getCartDetails.reduce(function(acc:any,val:any){
  //         return acc + (val.amt * val.qnt);
  //        },0);

  //      }

  //    }
  //    removeall(){
  //      localStorage.removeItem('localCart');
  //      this.getCartDetails = [];
  //      this.cartNumber = 0;
  //      this.auth.cartSubject.next(this.cartNumber);
  //    }
  //    singleDelete(getCartDetail:any){
  //     console.log(getCartDetail);
  //     if(localStorage.getItem('localCart')){
  //       this.getCartDetails = JSON.parse(localStorage.getItem('localCart')!) ;
  //       for(let i=0;i<this.getCartDetails.length;i++){

  //         if(this.getCartDetails[i].prodId === getCartDetail){
  //           this.getCartDetails.splice(i,1);
  //           localStorage.setItem('localCart',JSON.stringify(this.getCartDetails));
  //           this.CartDetails();
  //           this. cartNumberFunc();
  //         }
  //       }
  //     }
  //    }
  //    cartNumber:number = 0;
  // cartNumberFunc(){
  //   var cartValue = JSON.parse(localStorage.getItem('localCart')!) ;
  //   this.cartNumber = cartValue.length;
  //   this.auth.cartSubject.next(this.cartNumber);

  // }
}
