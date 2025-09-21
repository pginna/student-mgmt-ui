import { Component, OnInit } from '@angular/core';
import {Student} from '../student';
import {Course} from '../course';
import {FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {StudentService} from '../student.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-assign-course',
  templateUrl: './assign-course.component.html',
  styleUrls: ['./assign-course.component.css']
})
export class AssignCourseComponent implements OnInit {

  students: Student[] = [];
  courses: Course[] = [];
  assignForm: FormGroup;
  error: any;
  constructor(private studentService: StudentService, private router: Router, private formBuilder: FormBuilder) {
    this.assignForm = this.formBuilder.group({
      selectedStudent: [''],
      selectedCourse: ['']
    });
  }

  ngOnInit(): void {
    this.studentService.getStudentList().subscribe(students => {
      this.students = students;
    });
    this.studentService.getCourses().subscribe(courses => {
      this.courses = courses;
    });
  }
  onSubmit(): void {
    const { selectedStudent, selectedCourse } = this.assignForm.value;

    if (selectedStudent && selectedCourse) {
      this.studentService.assignCourse(+selectedStudent, +selectedCourse).subscribe( data => {
          console.log(data);
      },
        (err: any) => this.error = err,
        () => console.log('All done saving '));
      this.studentService.assignCourse(+selectedStudent, +selectedCourse);
      alert(`Assigned course to student!`);
      this.assignForm.reset(); // Clear the form after submission
    }
  }

}
