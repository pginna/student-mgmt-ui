import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import { CreateStudentComponent } from './create-student/create-student.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import {ErrorInterceptor} from './error-interceptor';
import { CreateCourseComponent } from './create-course/create-course.component';
import { CourseListComponent } from './course-list/course-list.component';
import { AssignCourseComponent } from './assign-course/assign-course.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    CreateStudentComponent,
    UpdateStudentComponent,
    StudentDetailsComponent,
    CreateCourseComponent,
    CourseListComponent,
    AssignCourseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true // Essential for allowing multiple interceptors
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
