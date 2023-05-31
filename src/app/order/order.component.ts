import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  constructor(private db: ProductService) {}
  data: any;
  ngOnInit(): void {
    this.orderlist();
  }

  orderlist() {
    this.data = this.db.listorder;
    console.log(this.data, 'asd');

    // console.log(this.data.data, this.data.orderdetail);
  }
  cancel(index: any) {
    this.db.removeOrder(index);
    // console.log(index);
  }
}
