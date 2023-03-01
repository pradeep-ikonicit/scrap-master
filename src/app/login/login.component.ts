import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:any;
  username: string = '';
  password: string = '';
  authError: string = '';

  constructor(private formBuilder:FormBuilder,private route:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      'Username': ['', [Validators.required]],
      'Password': ['', [Validators.required]]
    });
  }

  onSubmit(){
    this.route.navigate(['productsuite']);
  }

}
