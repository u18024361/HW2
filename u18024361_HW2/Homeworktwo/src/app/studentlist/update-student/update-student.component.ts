import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/shared/student.model';
import { ServiceService } from 'src/app/shared/service.service';
import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  StudentObject:Student;
  hide = true;
  newStudentObject:Student;
  Repeatpassword:string;
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor( private router: Router,public service:ServiceService ) {
   
   
   }

  ngOnInit(): void {
    this.StudentObject = this.service.currentuser;
    this.newStudentObject = this.service.currentuser;
   
    
   
  }
  

edittudent(){
  this.service.edituser(this.StudentObject,this.newStudentObject,this.Repeatpassword)
  if(this.service.valid == true){
this.home();}
}

home(){
this.router.navigate(['studentlist']);
  
}

}



