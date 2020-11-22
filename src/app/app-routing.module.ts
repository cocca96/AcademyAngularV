import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnrollmentComponent } from './enrollments/enrollment/enrollment.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponentComponent } from './students/details-component/details-component.component';
import { ModifyStudentComponent } from './students/modify-student/modify-student.component';
import { studentListComponent } from './students/student-list.component';
import { StudentReactiveComponent } from './students/student-reactive/student-reactive.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'home', component: HomeComponent },
    { path: 'students', component:  studentListComponent },
    { path: 'enrollments', component:  EnrollmentComponent },
    { path: 'studentIscr', component: StudentReactiveComponent },
    { path: 'students/:id', component: DetailsComponentComponent },
    {path:'studentIscr/:id', component: ModifyStudentComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' }
  
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
