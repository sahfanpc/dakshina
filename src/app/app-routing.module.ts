import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { HomeComponent } from './e-commerce/home/home.component';
import { ProdectdetailComponent } from './prodectdetail/prodectdetail.component';
import { LoginComponent } from './login/login.component';
import { DownDropPageComponent } from './down-drop-page/down-drop-page.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'table', component: TableComponent },
  { path: '', component: HomeComponent },
  { path: 'prodectdetail', component: ProdectdetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'down-drop-page', component: DownDropPageComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
