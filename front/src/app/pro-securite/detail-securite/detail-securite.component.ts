import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { AuthService } from 'src/app/shared/auth.service';
import { SecuriteService } from 'src/app/shared/securite.service';
import { securite } from 'src/app/securite.model';
import { securites } from 'src/app/securite-list';
import { voiture } from 'src/app/voiture.model';
import { voitures } from "src/app/voiture-list";
import { FavService } from 'src/app/shared/fav.service';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'app-detail-securite',
  templateUrl: './detail-securite.component.html',
  styleUrls: ['./detail-securite.component.css']
})
export class DetailSecuriteComponent implements OnInit {

  //public voiture?: voiture;
  securite={
      id: "",
      title: "",
      description:"",
      image:"",
     
      price :"",
      qnt:""

  }
  list : any ;
  _id=this.route.snapshot.params['id'];

  constructor(private auth :AuthService,private route: ActivatedRoute ,   private favService: FavService, private notificationService :NotificationService , private securiteService: SecuriteService) { }

  ngOnInit(): void {
    this.getone();
   // this.route.paramMap.subscribe(params => {
    //  const voitureId = params.get("id");
    //  this.voiture = voitures.filter(voiture => voiture._id === voitureId)[0];
   // });
  }
  getone(){
    // status 304 ok  
     this.securiteService.getByid(this._id).subscribe((data)=>
     { this.list=data;
      this.securite=this.list;
      console.log(this.securite);
    })
   }

  public addTofav():void {
    this.favService.add(this.securite?.id);  
    this.notificationService.success('! Add successfully');}
    reloadPage() {
      setTimeout(()=>{
          window.location.reload();
        }, 1000);  
    }

    inc(securite:any){
      if(securite.qnt !=5){
        securite.qnt = securite.qnt + 1;}
  
    }
    dec(securite:any){
      if(securite.qnt != 1){
        securite.qnt -=1;}
  
    }
    itemsCart:any = [];
    
    addCart(category:any){
      
      let cartDataNull = localStorage.getItem('localCart');
      if(cartDataNull == null){
        let storeDataGet:any =[];
        storeDataGet.push(category);
        localStorage.setItem('localCart',JSON.stringify(storeDataGet));
      }
      else{
      
        var id = category.securite._id;
        let index:number = -1;
        this.itemsCart =JSON.parse(localStorage.getItem('localCart')!) ;
        for(let i=0;i<this.itemsCart.length;i++){
          if(parseInt(id) === parseInt(this.itemsCart[i].securite._id)){
            this.itemsCart[i].qnt = category.qnt;
            index = i;
            break;
          }
        }
        if(index == -1){
          this.itemsCart.push(category);
          localStorage.setItem('localCart',JSON.stringify(this.itemsCart));
        }
        else{
          localStorage.setItem('localCart',JSON.stringify(this.itemsCart));
        }
      }
      this.cartNumberFunc();
  
  
  
  
     
    
    }
    cartNumber:number = 0;
    cartNumberFunc(){
      var cartValue = JSON.parse(localStorage.getItem('localCart')!) ;
      this.cartNumber = cartValue.length;
      this.auth.cartSubject.next(this.cartNumber);
     
    }




    
}
