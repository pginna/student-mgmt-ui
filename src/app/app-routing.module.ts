import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentListComponent} from './student-list/student-list.component';
import {CreateStudentComponent} from './create-student/create-student.component';
import {UpdateStudentComponent} from './update-student/update-student.component';
import {StudentDetailsComponent} from './student-details/student-details.component';
import {CreateCourseComponent} from './create-course/create-course.component';
import {CourseListComponent} from './course-list/course-list.component';
import {AssignCourseComponent} from './assign-course/assign-course.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './auth.guard';


const routes: Routes = [
  {path: 'students', component: StudentListComponent, canActivate: [AuthGuard]},
  {path: 'create-student', component: CreateStudentComponent},
  {path: 'update-student/:id', component: UpdateStudentComponent},
  {path: 'student-details/:id', component: StudentDetailsComponent},
  {path: 'create-course', component: CreateCourseComponent},
  {path: 'courses', component: CourseListComponent},
  {path: 'assign-course', component: AssignCourseComponent},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
