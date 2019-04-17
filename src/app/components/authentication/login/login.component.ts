import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

loginForm: FormGroup;

  constructor( private fb: FormBuilder,
               private authService: AuthService,
               private router: Router) { }

  ngOnInit() {

     this.loginForm = this.fb.group({

      email: ['', [ Validators.required, Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/) ] ],
      password: ['', [ Validators.required, Validators.minLength(6), Validators.maxLength(15) ] ]

     });
  }

  login() {
    this.authService.login(this.loginForm.value)
         .subscribe((data) => {
           localStorage.setItem('token', data['token']);
           localStorage.setItem('name', data['user']['name']);
           this.router.navigate(['/destination/all'])
         })
  }

  get form() {
    return this.loginForm.controls
  }

}