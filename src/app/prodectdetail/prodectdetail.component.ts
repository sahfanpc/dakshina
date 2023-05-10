import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Data } from '../e-commerce/home/data';
@Component({
  selector: 'app-prodectdetail',
  templateUrl: './prodectdetail.component.html',
  styleUrls: ['./prodectdetail.component.scss']
})
export class ProdectdetailComponent implements OnInit {
productdata:any
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.checkparams();
  }

  checkparams(): void{
    this.route.queryParams.subscribe((res: Params) => {
      const index=parseInt(res['product'])
      console.log(index)
      this.productdata = Data[index]
      console.log(this.productdata)
      // console.log(this.data)
    })
    
  }
  //   checkParams(): void{
  //   this.route.queryParams.subscribe((res: Params) => {
  //     console.log(res)
  //   });
  // }

}
