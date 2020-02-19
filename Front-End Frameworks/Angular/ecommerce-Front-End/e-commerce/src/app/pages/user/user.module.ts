import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { ReactiveFormsModule, NG_VALIDATORS } from '@angular/forms';
import { SharedComponentsModule } from 'src/app/core/shared-components.module';


@NgModule({
  declarations: [LoginRegisterComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    SharedComponentsModule,
  ]
})
export class UserModule { }
