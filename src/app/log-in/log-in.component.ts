import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {

  public loginForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  login() {
    this.http.get<any>("http://localhost:3000/SignUp")
      .subscribe(res => {
        const user = res.find((a: any) => {
          return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
        });
        this.http.post<any>(" http://localhost:3000/login", this.loginForm.value).subscribe(res => {
          this.loginForm.reset();
        })
        if (user) {
          alert("Login Successful");
          this.loginForm.reset();
          this.router.navigate(['/studentreg']);
        } else {
          alert("User not found");
        }
      }, err => {
        alert("Something went wrong")
      })
  }

}
