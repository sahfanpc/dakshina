import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task';
  // options: Array<any> = ['Angular', 'React', 'vue'];
  // objectOptions = [
  //   { name: 'angular' }, { name: 'angular js' }, { name: 'vue' }, { name: 'react' }
  // ];

  
  // displayFn(subject:any) {
  //   return subject ? subject.name : undefined;
  // }
// items:Array<any>=[]
//   textbutton: boolean = false;
  constructor(private fb:FormBuilder,private router:Router) { }
//   addform = this.fb.group({
//   select: ["", Validators.required],
//     firstname: ["", Validators.required],
//     lastname: ["", Validators.required],
//     email: ["", Validators.required],
//     number: ["", Validators.required],
//     password: ["", Validators.required],
//     confirmpassword: ["", Validators.required],
//     address1: ["", Validators.required],
//     address2: ["", Validators.required],
//     city: ["", Validators.required],
//     code: ["", Validators.required],
//     date: ["", Validators.required],
//     remark: ["", Validators.required],
//     gender: ["", [Validators.required]],
//     terms: ["", Validators.required]

// })

  ngOnInit(){
  }
//   submit(data:any) {
//   // this.router.navigateByUrl('table')
//     console.log(data)
//     this.textbutton = !this.textbutton;
//    this.items.push(data)

// }


}
