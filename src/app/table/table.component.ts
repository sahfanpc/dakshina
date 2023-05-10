import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  cartdata: any;
  constructor(private route: ActivatedRoute,private db:ProductService) { }

  ngOnInit(): void {
    this.cartproduct();
  }

  

  cartproduct() {
    this.cartdata = this.db.getallCart()
    console.log(this.cartdata,"set")
    
  }

  
}