import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { ElementRef, ViewChild } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {
  MatBottomSheet,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet'; // export interface PeriodicElement {
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { LoginComponent } from '../login/login.component';
import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { isTenAsync } from '../custom-valid';
import { ErrorStateMatcher } from '@angular/material/core';
import { NgIf } from '@angular/common';
// import { customValidator } from '../custom-valid';
// import { PasswordValidators } from '../custom-valid';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  selectedValue: string = '';
  // image: any;
  counter: number = 0;
  @Input() data: any;
  @Output() Itemevent = new EventEmitter<string>();
  exampleform = this.fb.group({
    name: ['', Validators.required, isTenAsync],
  });
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  // @ViewChild(MatPaginator) paginator!: MatPaginator;

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }
  constructor(
    private db: ProductService,
    private _bottomSheet: MatBottomSheet,
    private fb: FormBuilder
  ) {}

  // public childData($event: any): void {
  //   console.log($event);
  // }
  // // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // // dataSource = ELEMENT_DATA;

  // separatorKeysCodes: number[] = [ENTER, COMMA];
  // fruitCtrl = new FormControl('');
  // filteredFruits: Observable<string[]> | undefined;
  // fruits: string[] = ['Lemon'];
  // allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
  // // fruitInput:any
  // @ViewChild('fruitInput')
  // fruitInput!: ElementRef<HTMLInputElement>;
  // constructor(private _formBuilder: FormBuilder) {
  //   this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
  //     startWith(null),
  //     map((fruit: string | null) =>
  //       fruit ? this._filter(fruit) : this.allFruits.slice()
  //     )
  //   );
  // }
  // firstFormGroup: FormGroup = this._formBuilder.group({ firstCtrl: [''] });
  // secondFormGroup: FormGroup = this._formBuilder.group({ secondCtrl: [''] });

  ngOnChanges(): void {
    console.log(this.data);
  }

  increment() {
    this.counter++;
  }
  decrement() {
    this.counter--;
  }
  ngOnInit(): void {
    this.getViewimage();
    // console.log('micdsnics', this.data);
  }
  getViewimage() {
    // this.image = this.db.image;
    // console.log(data);
  }
  openBottomSheet(details: any): void {
    const size = this.selectedValue;
    this.db.Order(details, size);
    this._bottomSheet.open(LoginComponent);
  }
  childparent(data: any) {
    this.Itemevent.emit(data);
    console.log(data);
    if (this.exampleform.valid) {
      console.log(data, 'custom validation');
    } else {
      console.log('error custom validation');
    }
  }
}
