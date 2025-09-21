import { Component, OnInit } from '@angular/core';
import {Student} from '../student';
import {ActivatedRoute} from '@angular/router';
import {StudentService} from '../student.service';
import {Course} from '../course';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {


  id: number;
  student: Student;
  courses: Course[];
  constructor(private route: ActivatedRoute, private studentService: StudentService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;

    this.student = new Student();
    this.studentService.getStudentById(this.id).subscribe( data => {
      this.student = data;
    });

    this.studentService.getCoursesByStudent(this.id).subscribe(data => {
        this.courses = data;
      });

  }

}
