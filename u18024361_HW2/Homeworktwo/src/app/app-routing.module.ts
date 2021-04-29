import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentComponent} from './student/student.component';
import {StudentlistComponent} from './studentlist/studentlist.component';
import {UpdateStudentComponent} from './studentlist/update-student/update-student.component';

const routes: Routes = [
  {path:'', redirectTo:'studentlist',pathMatch:'full'},
  {path:'studentadd', component:StudentComponent},
  {path:'studentlist', component:StudentlistComponent},
  {path:'studentedit', component:UpdateStudentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
