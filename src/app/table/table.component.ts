import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  cartdata: any;
  cartprice: number = 0;
  removedprice: any;
  constructor(private route: ActivatedRoute,private db:ProductService,private snakBar:MatSnackBar,private router:Router) { }

  ngOnInit(): void {
    this.cartproduct();
  }

  Removecart(index: number) {
    this.cartprice -= this.cartdata[index].price
    this.db.removeItem(index)
    this.snakBar.open("removed", '', {
      duration: 3000
    })
  }

  cartproduct() {
    this.cartdata = this.db.getallCart()
      for (let i = 0; i < this.cartdata.length;i++) {
        this.cartprice += this.cartdata[i].price;         
    }
    for (let i = this.cartdata.length; i > 0;i--) {
        this.removedprice -= this.removedprice[i].price;         
      }
    
  }

  home() {
    this.router.navigateByUrl('');
  }

  
}