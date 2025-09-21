import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Student} from './student';
import {Observable} from 'rxjs';
import {Course} from './course';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private studentUrl = 'http://localhost:8084/api/v1/students';

  private coursesUrl = 'http://localhost:8084/api/v1/courses';
  private baseUrl = 'http://localhost:8084/api/v1';
  constructor(private httpClient: HttpClient) { }

  getStudentList(): Observable<Student[]>{
    return this.httpClient.get<Student[]>(`${this.studentUrl}`);
  }
  // tslint:disable-next-line:ban-types
  createStudent(student: Student): Observable<Object>{
    return this.httpClient.post(`${this.studentUrl}`, student);
  }
  getStudentById(id: number): Observable<Student>{
    return this.httpClient.get<Student>(`${this.studentUrl}/${id}`);
  }
  // tslint:disable-next-line:ban-types
  updateStudent(id: number, student: Student): Observable<Object>{
    return this.httpClient.put(`${this.studentUrl}/${id}`, student);
  }

  // tslint:disable-next-line:ban-types
  deleteStudent(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.studentUrl}/${id}`);
  }

  getCoursesByStudent(id: number): Observable<Course[]>{
    return this.httpClient.get<Course[]>(`${this.coursesUrl}/${id}`);
  }

  // tslint:disable-next-line:ban-types
  createCourse(course: Course): Observable<Object>{
    return this.httpClient.post(`${this.coursesUrl}`, course);
  }

  getCourses(): Observable<Course[]>{
    return this.httpClient.get<Course[]>(`${this.coursesUrl}`);
  }

  assignCourse(studentId: number, courseId: number): Observable<Student>{
    // @ts-ignore
    //alert(`${this.baseUrl}/${studentId}/course/${courseId}`);
    return this.httpClient.put<Student>(`${this.baseUrl}/${studentId}/course/${courseId}`);
  }

}
