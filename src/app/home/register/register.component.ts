import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
myForm:any;
fname:any;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmitForm(frm:any){
    this.myForm=frm
    console.log("Hello")
    console.log(this.myForm);
  }

}
