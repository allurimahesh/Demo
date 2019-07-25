import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormBuilder, Validators } from '@angular/forms';
import {AuthService} from '../../auth/guards/auth.service';
import {ILogin} from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model: ILogin = { emailid: 'admin', password: 'admin12345'};
  loginForm: FormGroup;
  message: string;
  returnUrl: string;

  formObject = {
  emailid: 'admin',
  password: 'admin12345'
 };

  constructor(private formBuilder: FormBuilder, private router: Router, public authService: AuthService) {}

  ngOnInit() {
    document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
    this.loginForm = this.formBuilder.group({
      emailid: [this.formObject.emailid, Validators.required],
      password: [this.formObject.password, Validators.required]
    });
    this.returnUrl = '/dashboard';
    this.authService.logout();
  }

  get f() { return this.loginForm.controls; }

  btnClick() {
    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    } else {
// tslint:disable-next-line: triple-equals
      if (this.f.emailid.value == this.model.emailid && this.f.password.value == this.model.password) {
        // console.log("Login successful");
      // this.authService.authLogin(this.model);
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('token', this.f.emailid.value);
        this.router.navigate([this.returnUrl]);
      } else {
        this.message = 'Please check your EmailId and Password';
        console.log(this.message);
      }
    }

  // btnClick(){
  //   this.router.navigateByUrl('/managefiles')
  // }
  }
}
