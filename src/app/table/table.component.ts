import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../services/product.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  cartdata: any;
  number:any;
  constructor(private route: ActivatedRoute,private db:ProductService,private snakBar:MatSnackBar) { }

  ngOnInit(): void {
    this.cartproduct();
   this.number=this.db.cart
  //  console.log(this.number)
  }

  Removecart(index:number){
    this.db.removeItem(index)
    this.snakBar.open("removed", '', {
      duration: 3000
    })
  }

  cartproduct() {
    this.cartdata = this.db.getallCart()
    console.log(this.cartdata,"set")
    
  }

  
}