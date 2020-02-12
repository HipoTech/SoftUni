import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }


  registerForm = new FormGroup({
    userName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    repeatePassword: new FormControl(''),
  });

  loginForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmitLogin() {
    this.userService.login(this.loginForm.value)
  }

  onSubmitRegister() {
    this.userService.register(this.registerForm.value)
  }


}
