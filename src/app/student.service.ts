import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Student} from './student';
import {Observable} from 'rxjs';
import {Course} from './course';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = 'http://localhost:8084/api/v1/students';

  private getCoursesUrl = 'http://localhost:8084/api/v1/courses';
  constructor(private httpClient: HttpClient) { }

  getStudentList(): Observable<Student[]>{
    return this.httpClient.get<Student[]>(`${this.baseUrl}`);
  }
  // tslint:disable-next-line:ban-types
  createStudent(student: Student): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`, student);
  }
  getStudentById(id: number): Observable<Student>{
    return this.httpClient.get<Student>(`${this.baseUrl}/${id}`);
  }
  // tslint:disable-next-line:ban-types
  updateStudent(id: number, student: Student): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`, student);
  }

  // tslint:disable-next-line:ban-types
  deleteStudent(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

  getCoursesList(id: number): Observable<Course[]>{
    return this.httpClient.get<Course[]>(`${this.getCoursesUrl}/${id}`);
  }
}
