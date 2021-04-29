import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServiceService } from 'src/app/shared/service.service';


@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {
userlist:any = [];
  constructor(private router: Router, public service:ServiceService ,) { }
  displayedColumns: string[] = ['Name', 'Email', 'UserRole','Delete','Edit'];
  ngOnInit(): void {
    this.userlist = JSON.parse(localStorage.getItem('user'));
  }

  deleteUser(id:number){
    let list = JSON.parse(localStorage.getItem('user'));
    
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this item',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.value) {
        for(let i =0; i <list.length;i++){
          if(list[i].Id == id){
            list.splice(i,1);
          }
        }
        localStorage.setItem('user',JSON.stringify(list));
        this.refreshlist();
        Swal.fire('Deleted!', 'The student has been deleted', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'The student data is safe :)', 'error');
      }
    });

   
  }

  edituser(item){
    this.service.currentuser = item;
  }

  refreshlist(){this.userlist = JSON.parse(localStorage.getItem('user'));}
}
