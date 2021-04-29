import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../shared/student.model';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  StudentObject: Student;
  hide = true;
  Users: any = [];
  ID: number;
  Repeatpassword:string;
  valid:boolean;
  email = new FormControl('', [Validators.required, Validators.email]);
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.resetForm();
    this.Users = JSON.parse(localStorage.getItem('user'));
    console.log(this.Users);
  }
  resetForm() {
    this.StudentObject = {
      Name: '',
      Surname: '',
      Id: 0,
      Title: '',
      Email: '',
      Role: '',
      Password: '',
    };
    this.Repeatpassword ='';
  }

  addstudent() {
  console.log(this.StudentObject)
    if (this.CheckForm ()) {
      if (this.Users == null) {
        this.Users = [];
        this.ID = this.Users.length + 1;
        this.StudentObject.Id = this.ID;
        this.Users.push(this.StudentObject);
        localStorage.setItem('user', JSON.stringify(this.Users));
        this.resetForm();
      } else {
        this.ID = this.Users.length + 1;
        this.StudentObject.Id = this.ID;
        this.Users.push(this.StudentObject);
        localStorage.setItem('user', JSON.stringify(this.Users));

        this.resetForm();
      }
    }
  }

  getErrorMessage(){

    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  CheckForm() {
    this.valid = true;
    if (
      
      this.StudentObject.Email == '' ||
      this.StudentObject.Name == '' ||
      this.StudentObject.Password == '' ||
      this.StudentObject.Role == '' ||
      this.StudentObject.Surname == '' ||
      this.StudentObject.Title == '' ||
      this.StudentObject.Password != this.Repeatpassword 
    ) {
      this.valid = false;
    }
    return this.valid;
  }
}
