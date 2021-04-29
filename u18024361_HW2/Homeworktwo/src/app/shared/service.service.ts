import { Injectable } from '@angular/core';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  currentuser:Student;
  valid:boolean ;

  constructor() { }


  


  edituser(currentuser, newuser,repeatPassword){
    this.valid = true;
   if( newuser.Email ==''||newuser.Name==""||newuser.Password==''||newuser.Role==''||newuser.Surname==''||newuser.Password ==''|| newuser.Password !=repeatPassword )
   {
     this.valid = false;
     
   }
   if(this.valid == true){ let user = JSON.parse(localStorage.getItem("user"));
   for (let i = 0; i < user.length;i++){
     if(user[i].Id == currentuser.Id){
      user[i] = newuser;
     }
   }
   localStorage.setItem('user',JSON.stringify(user));}
else(console.log("nnnn"))
   
    
    
  }

}
