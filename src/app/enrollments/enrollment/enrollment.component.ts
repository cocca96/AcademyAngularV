import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IEnrollment } from '../IEnrollment';
import { EnrollmentService } from './enrollment.service';
import { ICourse } from './ICourse';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css']
})
export class EnrollmentComponent implements OnInit {

  constructor(private enrollmentService: EnrollmentService) { }
  courses: ICourse[];
  enrollment: IEnrollment = { idCorso: 1 };
  courseId: any;
  ngOnInit(): void {
    this.getCourses();
  }
  getCourses(): void {
    this.enrollmentService.getCourses().subscribe({
      next: (courses) => this.courses = courses,
    })

  }
  addEnrollment(): void {

    this.enrollmentService.addEnrollment(this.enrollment).subscribe({
      next: data => console.log(data),
    });
  }



}
