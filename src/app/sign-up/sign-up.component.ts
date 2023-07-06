import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  public signupForm!: FormGroup;
  constructor(private formbuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.signupForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  get password() {
    return this.signupForm.get('password');
  }

  get email() {
    return this.signupForm.get('email');
  }

  signUp() {
    this.http.post<any>(" http://localhost:3000/SignUp", this.signupForm.value)
      .subscribe(res => {
        alert("SignUp Successfull")
        this.signupForm.reset();
        this.router.navigate(['login']);
      }, err => {
        alert("Something went wrong")
      })
  }

}
