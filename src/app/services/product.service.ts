import { Injectable } from '@angular/core';
import { Data } from '../e-commerce/home/data';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  isprod: any;
  datas: any = Data;
  cart: Array<any> = []
  constructor() { }


  addtocart(product: any) {
    if (this.cart.length == 0) {
      this.cart.push(product)
      this.isprod = true;
    } else {
      const prod = this.cart.filter((cartproduct:any) => cartproduct.id == product.id)
      if (prod.length == 0) {
        this.cart.push(product)
        this.isprod = true
      }
      else {
        this.isprod = false;
      }
    }
    return this.isprod;
      
}
removeItem(index:any):void{
    this.cart.splice(index,1)
}
  getallCart() {
  return this.cart
}




}
