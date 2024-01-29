import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FeUserService } from '../../services/fe-user.service';

@Component({
  selector: 'access-ability-job-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(
    private userService: FeUserService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }
  loginBtnClick() {
    console.log('form', this.loginForm.value);
    this.userService.login(this.loginForm.value);

    // event handler logic here
  }

  signUpBtnClick() {
    // event handler logic here
    this.userService.createUser(this.loginForm.value);

  }
}
