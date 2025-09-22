import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../auth-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  dummyUsername = 'user';
  dummyPassword = 'password';
  errorMessage: string | null = null;
  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  // tslint:disable-next-line:typedef
  get getForm() {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
        () => {
          this.router.navigate(['/students']); // Redirect to a protected route
        },
        (error) => {
          this.errorMessage = 'Login failed. Please check your credentials.';
          console.error('Login error:', error);
        }
      );
    }
  }

  // tslint:disable-next-line:typedef
  goToStudentList(){
    this.router.navigate(['/students']);
  }
}
