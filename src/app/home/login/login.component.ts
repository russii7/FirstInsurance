import { Component, OnInit} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {ButtonModule} from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
myForm:any;



constructor(private xyz:Router) { }

  ngOnInit(): void {
    
  }
 

  onSubmit(myForm:any){
  console.log(myForm.value)
  }
  

}
