<template>
  <div class="errorMessage">
    <!-- login error messages -->
    <!-- <div
      v-if="
        $v.loginUserName.$invalid &&
        ($v.loginUserName.$touched || $v.loginUserName.$dirty)
      "
      class="alert alert-danger"
    >
      Login error:
      <app-error-message
        v-if="$v.loginUserName.required.$invalid"
        errorMessage="Username is required!"
      >
      </app-error-message>
      <app-error-message
        :errorMessage="`User must be at least ${$v.loginUserName.minLength.$params.min} characters long in login form`"
      >
      </app-error-message>
    </div> -->
    <!-- <div
      v-if="
        loginPassword.invalid && (loginPassword.touched || loginPassword.dirty)
      "
      class="alert alert-danger"
    >
      <app-error-message
        v-if="loginPassword.errors.required"
        errorMessage="Password is reqired in login form"
      >
      </app-error-message>
    </div> -->
    <!-- /login error messages -->
    <!-- register error messages -->
    <!-- <div
      v-if="
        registerUserName.invalid &&
        (registerUserName.touched || registerUserName.dirty)
      "
      class="alert alert-danger"
    >
      <app-error-message
        v-if="registerUserName.errors.required"
        errorMessage="User name is reqired in register form"
      >
      </app-error-message>
      <app-error-message
        v-if="registerUserName.errors.minlength"
        errorMessage="User must be at least 6 characters long in register form"
      >
      </app-error-message>
    </div>
    <div
      v-if="
        registerEmail.invalid && (registerEmail.touched || registerEmail.dirty)
      "
      class="alert alert-danger"
    >
      <app-error-message
        v-if="registerEmail.errors.required"
        errorMessage="Please enter an e-mail"
      >
      </app-error-message>
      <app-error-message
        v-if="registerEmail.errors.pattern"
        errorMessage="Please enter a valid e-mail"
      >
      </app-error-message>
    </div>
    <div
      v-if="
        registerForm.get('passwords').invalid &&
        (registerForm.get('passwords').touched ||
          registerForm.get('passwords').dirty)
      "
      class="alert alert-danger"
    >
      <app-error-message errorMessage="Password is reqired in register form">
      </app-error-message>
    </div>
    <div
      v-if="registerForm.get('passwords').errors?.matchPasswords"
      class="alert alert-danger"
    >
      <app-error-message errorMessage="Passwords don't match!">
      </app-error-message>
    </div> -->

    <!-- /register error messages -->
  </div>
  <section id="form">
    <div class="container">
      <div class="row">
        <div class="col-sm-4 col-sm-offset-1">
          <div class="login-form">
            <h2>Login to your account</h2>
            <form @submit.prevent="submitLogin">
              <!-- <form [formGroup]="loginForm" (ngSubmit)="onSubmitLogin()"> -->
              <app-error-message
                :hasError="usernameError.state"
                :errorMessage="usernameError.errorMessage"
              />
              <input
                v-model="loginUserName"
                type="text"
                placeholder="Name"
                @keyup="validateUsername()"
              />
              <app-error-message
                :hasError="passwordError.state"
                :errorMessage="passwordError.errorMessage"
              />
              <input
                v-model="loginPassword"
                type="email"
                placeholder="Email Address"
                @keyup="validatePassword()"
              />
              <span>
                <input type="checkbox" class="checkbox" />
                Keep me signed in
              </span>
              <button type="submit" class="btn btn-default">
                <!-- <button
                [disabled]="loginUserName.invalid || loginPassword.invalid"
                type="submit"
                class="btn btn-default"
              > -->
                Login
              </button>
            </form>
          </div>
        </div>
        <div class="col-sm-1">
          <h2 class="or">OR</h2>
        </div>
        <div class="col-sm-4">
          <div class="signup-form">
            <h2>New User Signup!</h2>
            <form>
              <!-- <form [formGroup]="registerForm" (ngSubmit)="onSubmitRegister()"> -->
              <input v-model="userName" type="text" placeholder="Name" />
              <input v-model="email" type="email" placeholder="Email Address" />
              <div formGroupName="passwords">
                <input
                  v-model="password"
                  type="password"
                  placeholder="Password"
                  autocomplete="Password"
                />
                <input
                  v-model="repeatePassword"
                  type="password"
                  placeholder="Repeate password"
                  autocomplete="Repeate password"
                />
              </div>
              <button type="submit" class="btn btn-default">
                <!-- <button
                [disabled]="registerForm.invalid"
                type="submit"
                class="btn btn-default"
              > -->
                Signup
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script src="./LoginOrRegister"></script>
<style scoped src="./LoginOrRegister.scss" lang="scss"></style>