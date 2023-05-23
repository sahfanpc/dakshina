import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
// import { map, startWith } from 'rxjs';
import {
  MatBottomSheet,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { ProductService } from '../services/product.service';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';
// import { DownDropPageComponent } from '../down-drop-page/down-drop-page.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  displayorder: any;
  // name1: any;
  // myControl = new FormControl('');
  // options: string[] = ['One', 'Two', 'Three','four'];
  // filterOptions: Observable<string[]> | undefined;

  constructor(
    private _bottomSheet: MatBottomSheet,
    private formBuilder: FormBuilder,
    private _bottomSheetRef: MatBottomSheetRef<LoginComponent>,
    private db: ProductService,
    private router: Router,
    private fb: FormBuilder
  ) {}
  //  checkboxForm = this.formBuilder.group({
  //     termsAccepted: [false, Validators.requiredTrue]
  //   });
  value: any;
  orderform = this.formBuilder.group({
    place: ['', Validators.required],
    address: ['', Validators.required],
    pin: ['', Validators.required],
  });
  ngOnInit(): void {
    this.getorder();
  }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
  getorder(): void {
    this.displayorder = this.db.orderdetail;
    console.log('3', this.displayorder);
  }
  order(data: any) {
    console.log(data);
    const orderdetail = this.displayorder;
    this.db.orderlist(data, orderdetail);
    this.router.navigateByUrl('order');
    this._bottomSheetRef.dismiss();
  }
}
