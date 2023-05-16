import { Component, OnInit } from '@angular/core';
import { Data } from './data';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import * as AOS from 'aos';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  showFiller = false;
  addcart: any;
  data: any;
  constructor(
    private router: Router,
    private db: ProductService,
    private snackBat: MatSnackBar
  ) {}

  ngOnInit(): void {
    AOS.init();
    this.data = Data;
  }

  viewProdect(index: any) {
    // console.log("index",index)
    this.router.navigate(['prodectdetail'], {
      queryParams: { product: index },
    });
  }
  add(product: any) {
    this.addcart = this.db.addtocart(product);
    if (this.addcart) {
      this.snackBat.open('product added', 'close', {
        duration: 3000,
        // verticalPosition:'top'
      });
      // alert("Product Added")
    } else {
      // alert("Already exist")
      this.snackBat.open('Already exist', 'close', {
        duration: 3000,
        // verticalPosition:'top'
      });
    }
    // this.router.navigateByUrl('table')
  }

  cart() {
    this.router.navigateByUrl('table');
  }
}
