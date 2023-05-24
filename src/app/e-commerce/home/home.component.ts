import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Data } from './data';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import * as AOS from 'aos';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProfileComponent } from 'src/app/profile/profile.component';
import {
  MatBottomSheet,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  showFiller = false;
  addcart: any;
  data: any;
  itemdata: any;
  value: any;
  @ViewChild('childView') child!: ProfileComponent;
  // @Output() public sendData = new EventEmitter<any>();
  @ViewChild('test') refbox!: ElementRef;
  constructor(
    private router: Router,
    private db: ProductService,
    private snackBat: MatSnackBar,
    private _bottomSheet: MatBottomSheet
  ) {}

  ngOnInit(): void {
    AOS.init();
    this.data = Data;
  }

  ngAfterViewInit(): void {
    console.log(this.refbox);
    this.refbox.nativeElement.style.color = 'red';
  }
  openBottomSheet(data: any): void {
    // this.db.veiwImage(data);
    this.itemdata = data;

    // console.log(data);
    // this.sendData.emit('jhgvuyvuyubbhh');
    // this._bottomSheet.open(ProfileComponent);
    // console.log(data);
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
  testEvent(data: any) {
    console.log(data, 'parent');
  }
  // Product(data: any) {
  //   console.log(data, 'product');
  //   this.sendData.emit(data);
  // }
  inc(): void {
    this.child.increment();
  }
  dec(): void {
    this.child.decrement();
  }
}
