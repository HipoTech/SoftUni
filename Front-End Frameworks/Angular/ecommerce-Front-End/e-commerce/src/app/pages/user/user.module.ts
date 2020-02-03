import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginRegisterComponent } from './login-register/login-register.component';


@NgModule({
  declarations: [LoginRegisterComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
