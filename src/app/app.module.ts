import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { HomeComponent } from './e-commerce/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatChipsModule} from '@angular/material/chips';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { from } from 'rxjs';
import { MatTabsModule } from '@angular/material/tabs';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterLink, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProdectdetailComponent } from './prodectdetail/prodectdetail.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { LoginComponent } from './login/login.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';




@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    HomeComponent,
    ProdectdetailComponent,
    LoginComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
  MatPaginatorModule,
  MatTabsModule,
  MatSelectModule,
  MatFormFieldModule,
  MatDialogModule,
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatChipsModule,
  MatGridListModule,
  MatSlideToggleModule,
  RouterLink,
    HttpClientModule, 
    MatSnackBarModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatListModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
