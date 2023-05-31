import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Data } from '../e-commerce/home/data';
// import { TranslateService } from '@ngx-translate/core';
// import { CustomPipe } from '../custom.pipe';
@Component({
  selector: 'app-prodectdetail',
  templateUrl: './prodectdetail.component.html',
  styleUrls: ['./prodectdetail.component.scss'],
})
export class ProdectdetailComponent implements OnInit {
  productdata: any;
  selectedOption = 'english';
  content = 'how are you?';
  selectedLanguage: string = 'en';
  content1 = 'hello';

  // selectedOption = 'english';
  // childData: any;
  // @Input() childData: any;

  constructor(
    private route: ActivatedRoute // private translate: TranslateService
  ) {
    // this.translate.setDefaultLang('en');
    // this.translate.use('en');
  }

  ngOnInit(): void {
    this.checkparams();
  }
  changeLanguage(event: Event) {
    const target = event.target as HTMLSelectElement;
    const language = target.value;
    this.selectedLanguage = language;
  }

  onOptionSelected(event: any): void {
    this.selectedOption = event.value;
    console.log('Selected Option:', this.selectedOption);
  }
  checkparams(): void {
    this.route.queryParams.subscribe((res: Params) => {
      const index = parseInt(res['product']);
      // console.log(index);
      this.productdata = Data[index];
      // console.log(this.productdata);
      // console.log(this.data)
    });
  }
  //   checkParams(): void{
  //   this.route.queryParams.subscribe((res: Params) => {
  //     console.log(res)
  //   });
  // }
}
