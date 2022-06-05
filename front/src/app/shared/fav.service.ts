import { Injectable } from '@angular/core';

import { LocalStorageService } from "src/app/shared/local-storage.service";

import { voiture } from "src/app/voiture.model";

@Injectable({
  providedIn: 'root'
})
export class FavService {

  public favContent: any = [];

  constructor(
    private localStorageService: LocalStorageService
  ) {
    this.favContent = this.load();
  }

  add(productID?: string) {

    if(!this.favContent.filter((elem: voiture) => elem._id === productID)[0]) {
      this.favContent.push({id: productID})
    }

    this.localStorageService.set('fav', this.favContent);
  }

  load() {
    return this.localStorageService.get('fav')
  }
  clear() {
    this.favContent = [];
    this.localStorageService.set('fav', this.favContent);
  }


  // public get() {
  //   return this.cartContent;
  // }

}