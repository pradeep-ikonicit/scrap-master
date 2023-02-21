import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize, takeWhile } from 'rxjs';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  // genderList = [
  //   { label: 'Male', value: 'MALE' },
  //   { label: 'Female', value: 'FEMALE' },
  // ];
  // departmentList: any = [];
  // userRoles:any = [];
  // selectedUser: any = {};
  // subscribeFlag = true;
  // dosages: any = [];
  // teams:any = [];
  // userId: number = 0;
  // editForm = false;
  // userForm = this.formBuilder.group({
  //   firstName: ['', [Validators.required]],
  //   lastName: [''],
  //   dateOfBirth: ['', [Validators.required]],
  //   gender: ['', [Validators.required]],
  //   deptId: ['', [Validators.required]],
  //   dosageId: [''],
  //   roleId: ['', [Validators.required]],
  //   contactNo: ['', [Validators.required]],
  //   mailId: ['', [Validators.email, Validators.required]],
  //   addressLine1: [''],
  //   addressLine2: [''],
  //   city: [''],
  //   zipCode: [''],
  //   teamId: ['', [Validators.required]],
  //   certifiedReviewer:[''],
  // });


  constructor(private readonly formBuilder: FormBuilder,private route: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  saveUser() {

  }

  redirectToLogin() {
    this.route.navigate(['']);
  }

}
