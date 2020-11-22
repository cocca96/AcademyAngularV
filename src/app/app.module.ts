import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { studentListComponent } from './students/student-list.component';
import { HomeComponent } from './home/home.component';
import { studentService } from './students/student.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {  MatTableModule} from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';
import { StudentComponent } from './students/student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentReactiveComponent } from './students/student-reactive/student-reactive.component';
import { DetailsComponentComponent } from './students/details-component/details-component.component';
import { ModifyStudentComponent } from './students/modify-student/modify-student.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { EnrollmentComponent } from './enrollments/enrollment/enrollment.component';
import { EnrollmentService } from './enrollments/enrollment/enrollment.service';



@NgModule({
  declarations: [
    AppComponent,
    studentListComponent,
    HomeComponent,
    StudentComponent,
    StudentReactiveComponent,
    DetailsComponentComponent,
    ModifyStudentComponent,
    EnrollmentComponent
    
  ],
   
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule
    
    
    
  
  ],
  providers: [studentService,EnrollmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
