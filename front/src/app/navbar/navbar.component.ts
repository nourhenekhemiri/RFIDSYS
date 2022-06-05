import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from "src/app/shared/local-storage.service";
import { AuthService } from "src/app/shared/auth.service";
import { CartService } from '../shared/cart.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentUser: any;
  isLoggedIn : boolean ;
  isAdmin : boolean;
  cartItemsCount: any = 0;
  constructor(
    private localStorageService: LocalStorageService,
    public authService: AuthService,
    private auth: AuthService,
    private cartService : CartService
  ) {
    this.currentUser = this.localStorageService.get('user');
    // this.auth.cartSubject.subscribe((data) => {
    //   this.cartItem = data;
    // })

  }


  ngOnInit(): void {
    if (JSON.parse(localStorage.getItem('localCart'))) {

      this.cartItemsCount = JSON.parse(localStorage.getItem('localCart')).length;
    }

    this.getCartItem();
    this.cartItemFunc();
    this.checkIfLoggedIn();
    this.checkIfAdmin();
  }
  checkIfAdmin(){
    if (this.isLoggedIn){
      const type = JSON.parse(localStorage.getItem('user')).type;
    if(type == "admin"){
      this.isAdmin = true;
    }
    else{
      this.isAdmin = false;
    }
    }
  }

  getCartItem(){
    this.cartService.countTheCart();
    this.cartService.cartItemCountObservable().subscribe((data) => {
      this.cartItemsCount = data;
    });
  }

  checkIfLoggedIn() {
    // check if token in local storage
    if (localStorage.getItem('access_token') == "null" || localStorage.getItem('access_token') == null ) {
      this.isLoggedIn = false;
    } else {
      this.isLoggedIn = true;
    }

  }

  cartItem: number = 0;
  cartItemFunc() {
    if (localStorage.getItem('localCart') != null) {
      var cartCount = JSON.parse(localStorage.getItem('localCart')!);
      this.cartItem = cartCount.length;
    }
  }




  reloadPage() {
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }

}
