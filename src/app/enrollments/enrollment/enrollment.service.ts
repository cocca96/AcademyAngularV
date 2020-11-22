import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEnrollment } from '../IEnrollment';
import { ICourse } from './ICourse';

@Injectable({
    providedIn: 'root'
})
export class EnrollmentService {
    error: HttpErrorResponse;
    urlCorsi = 'http://localhost:8080/api/corso';
    url="http://localhost:8080/api/iscrizione"

    constructor(private http: HttpClient) { }
    getCourses(): Observable<ICourse[]> {
        return this.http.get<ICourse[]>(this.urlCorsi);
    }
    addEnrollment(enrollment:IEnrollment): Observable<IEnrollment> {
        const headers = { 'content-type': 'application/json' }
        return this.http.post<IEnrollment>(this.url, enrollment, { 'headers': headers });
      }
}