import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs';
import { MatBottomSheet,MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { DownDropPageComponent } from '../down-drop-page/down-drop-page.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three','four'];
  filterOptions: Observable<string[]> | undefined;


  constructor(private _bottomSheet: MatBottomSheet) { }

  ngOnInit(): void {
    this.filterOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }
    openBottomSheet(): void {
    this._bottomSheet.open(DownDropPageComponent);
  }

 private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
 }
  
  submit(data: any) {
    console.log(data)
  }
  // ////////////////////

  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

}

// @Component({
//   selector: 'app-down-drop-page',
//   templateUrl: './down-drop-page.component.html',
// })
//   export class DownDropPageComponent{

//   constructor(private _bottomSheetRef: MatBottomSheetRef<DownDropPageComponent>) {}

//   openLink(event: MouseEvent): void {
//     this._bottomSheetRef.dismiss();
//     event.preventDefault();
//   }
// }