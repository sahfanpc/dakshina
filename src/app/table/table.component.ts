import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  cartdata: any;
  cartprice: number = 0;
  removedprice: any;
  item: any;
  constructor(
    private route: ActivatedRoute,
    private db: ProductService,
    private snakBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartproduct();
  }

  Removecart(index: number) {
    this.cartprice -= this.cartdata[index].price;
    this.db.removeItem(index);
    this.snakBar.open('removed', '', {
      duration: 3000,
    });
  }

  cartproduct() {
    this.cartdata = this.db.getallCart();
    for (let i = 0; i < this.cartdata.length; i++) {
      this.cartprice += this.cartdata[i].price;
    }
  }

  home() {
    this.router.navigateByUrl('');
  }
  cart(item: any) {
    this.item = item;
  }
}
