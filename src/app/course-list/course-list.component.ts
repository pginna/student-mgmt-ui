import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service';
import {Router} from '@angular/router';
import {Student} from '../student';
import {Course} from '../course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses: Course[];
  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit(): void {
    this.getCourses();
  }

  // tslint:disable-next-line:typedef
  private getCourses(){
    this.studentService.getCourses().subscribe(data => {
      this.courses = data;
    });
  }

}
