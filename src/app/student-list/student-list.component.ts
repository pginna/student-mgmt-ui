import { Component, OnInit } from '@angular/core';
import {Student} from '../student';
import {StudentService} from '../student.service';
import {Router} from '@angular/router';
import { Course } from '../course';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Student[];

  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit(): void {
    this.getStudents();
  }

  // tslint:disable-next-line:typedef
  private getStudents(){
      this.studentService.getStudentList().subscribe(data => {
      this.students = data;
    });
  }

  // tslint:disable-next-line:typedef
  updateStudent(id: number){
    this.router.navigate(['update-student', id]);
  }



  // tslint:disable-next-line:typedef
  deleteStudent(id: number){
    this.studentService.deleteStudent(id).subscribe( data => {
      console.log(data);
      this.getStudents();
    });
  }

  // tslint:disable-next-line:typedef
  studentDetails(id: number){
    this.router.navigate(['student-details', id]);
  }

}
