import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { HomeComponent } from './e-commerce/home/home.component';
import { ProdectdetailComponent } from './prodectdetail/prodectdetail.component';

const routes: Routes = [
  { path: 'table', component: TableComponent },
  { path: '', component: HomeComponent },
  {path:'prodectdetail',component:ProdectdetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
