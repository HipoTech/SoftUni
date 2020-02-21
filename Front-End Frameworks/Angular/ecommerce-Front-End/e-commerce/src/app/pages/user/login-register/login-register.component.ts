import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { matchPasswords } from './passwordValidator';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {
  constructor(private userService: UserService, private router: Router, private fb: FormBuilder) { }


  ngOnInit() {
  }

  registerForm = this.fb.group({
    userName: new FormControl('', [
      Validators.required
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
    ]),
    passwords: this.fb.group({
      password: ['', [Validators.required]],
      repeatePassword: ['', [Validators.required]],
    }, { validator: [matchPasswords] })
  }
  );

  loginForm = new FormGroup({
    userName: new FormControl('', [
      Validators.required,
      Validators.minLength(4)]
    ),
    password: new FormControl('', [Validators.required]),
  });

  onSubmitLogin() {
    this.userService.login(this.loginForm.value)
  }

  onSubmitRegister() {
    this.userService.register(this.registerForm.value)

  }

  get registerUserName() { return this.registerForm.get('userName'); }
  get registerEmail() { return this.registerForm.get('email'); }


  get loginUserName() { return this.loginForm.get('userName'); }
  get loginPassword() { return this.loginForm.get('password'); }

}
