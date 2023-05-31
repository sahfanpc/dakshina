import { Injectable } from '@angular/core';
import { Data } from '../e-commerce/home/data';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  isprod: any;
  datas: any = Data;
  cart: Array<any> = [];
  image: any;
  orderdetail: any;
  listorder: Array<any> = [];
  constructor() {}

  // veiwImage(data: any) {
  //   this.image = data;
  // }

  addtocart(product: any) {
    if (this.cart.length == 0) {
      this.cart.push(product);
      this.isprod = true;
    } else {
      const prod = this.cart.filter(
        (cartproduct: any) => cartproduct.id == product.id
      );
      if (prod.length == 0) {
        this.cart.push(product);
        this.isprod = true;
      } else {
        this.isprod = false;
      }
    }
    return this.isprod;
  }
  removeItem(index: any): void {
    this.cart.splice(index, 1);
  }
  getallCart() {
    return this.cart;
  }
  Order(details: any, size: any, itemnumber: any) {
    this.orderdetail = { details, size, itemnumber };
    // console.log('2', this.orderdetail);
  }
  orderlist(data: any, orderdetail: any) {
    this.listorder.push({
      place: data.place,
      address: data.address,
      pin: data.pin,
      size: orderdetail.size,
      id: orderdetail.details.id,
      title: orderdetail.details.title,
      price: orderdetail.details.price,
      image: orderdetail.details.image,
      item: orderdetail.itemnumber,
    });
    console.log(this.listorder, 'services');
  }
  removeOrder(index: number) {
    const newIndex = this.listorder.findIndex((e) => e.id === index);
    if (newIndex >= 0) {
      this.listorder.splice(newIndex, 1);
    }
  }
}
