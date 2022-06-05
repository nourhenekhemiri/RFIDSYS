import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cartItemCount : Subject<number> = new Subject();;


  cartItemCountObservable(){
    return this.cartItemCount.asObservable();
  }


  addToCart(item){
    var cartFromLocal = this.getCartFromLocalStorage();
    if (cartFromLocal){
      var index = cartFromLocal.findIndex(x => x._id == item._id);

      if (index == -1 ){
        item.quantity = 1;
        cartFromLocal.push(item);
        localStorage.setItem('localCart',JSON.stringify(cartFromLocal));
      }else if (index > -1){

        cartFromLocal[index].quantity = cartFromLocal[index].quantity + 1;
        cartFromLocal[index].price = cartFromLocal[index].price + item.price;
        localStorage.setItem('localCart',JSON.stringify(cartFromLocal));
      }

    }
    else{
      cartFromLocal = [];
      item.quantity = 1;
      cartFromLocal.push(item);
      localStorage.setItem('localCart',JSON.stringify(cartFromLocal));
    }
    this.cartItemCount.next(this.getCartItemCount());
  }

  getCartFromLocalStorage(){
    return JSON.parse(localStorage.getItem('localCart'));
  }

  countTheCart(){
    this.cartItemCount.next(this.getCartItemCount());
  }

  getCartItemCount(){
    let count = 0;
    if(localStorage.getItem('localCart')){
      count = JSON.parse(localStorage.getItem('localCart')).length;
    }
    return count;
  }

}
