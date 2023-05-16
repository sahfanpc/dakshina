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
// import { DownDropPageComponent } from '../down-drop-page/down-drop-page.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  // name: any;
  // name1: any;
  // myControl = new FormControl('');
  // options: string[] = ['One', 'Two', 'Three','four'];
  // filterOptions: Observable<string[]> | undefined;

  constructor(
    private _bottomSheet: MatBottomSheet,
    private formBuilder: FormBuilder
  ) {}
  //  checkboxForm = this.formBuilder.group({
  //     termsAccepted: [false, Validators.requiredTrue]
  //   });

  ngOnInit(): void {
    // this.filterOptions = this.myControl.valueChanges.pipe(
    //   startWith(''),
    //   map(value => this._filter(value || '')),
    // );
  }
  //   openBottomSheet(): void {
  //   this._bottomSheet.open(DownDropPageComponent);
  // }

  //  private _filter(value: string): string[] {
  //     const filterValue = value.toLowerCase();

  //     return this.options.filter(option => option.toLowerCase().includes(filterValue));
  //  }

  // submit(data: any) {
  //   console.log(data)
  // }
  // ////////////////////

  // hidden = false;

  // toggleBadgeVisibility() {
  //   this.hidden = !this.hidden;
  // }
  // button() {
  //   console.log(this.name)
  //   console.log(this.name1)
  // }

  // submitForm() {
  //     if (this.checkboxForm.valid) {
  //       console.log('Form submitted successfully');
  //     } else {
  //       console.log('Please accept the terms and conditions');
  //     }
  //   }
}
