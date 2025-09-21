import { Component, OnInit } from '@angular/core';
import {Student} from '../student';
import {Course} from '../course';
import {StudentService} from '../student.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {
  course: Course = new Course();
  error: any;
  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit(): void {
  }


  // tslint:disable-next-line:typedef
  saveCourse(){
    this.studentService.createCourse(this.course).subscribe( data =>{
        console.log(data);
        this.goToCourseList();
      },
      (err: any) => this.error = err,
      () => console.log('All done saving '));
  }

  // tslint:disable-next-line:typedef
  goToCourseList(){
    this.router.navigate(['/courses']);
  }

  // tslint:disable-next-line:typedef
  onSubmit(){
    console.log(this.course);
    this.saveCourse();
  }
}
