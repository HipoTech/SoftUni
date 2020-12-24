<template>
  <div class="errorMessage"></div>
  <section id="form">
    <div class="container">
      <div class="row">
        <div class="col-sm-4 col-sm-offset-1">
          <div class="login-form">
            <app-error-message
              :hasError="usernameErrorLogin.state"
              :errorMessage="usernameErrorLogin.errorMessage"
            />
            <app-error-message
              :hasError="passwordErrorLogin.state"
              :errorMessage="passwordErrorLogin.errorMessage"
            />
            <app-error-message
              :hasError="serverLoginError.state"
              :errorMessage="serverLoginError.errorMessage"
            />
            <h2>Login to your account</h2>
            <form @submit.prevent="submitLogin">
              <!-- <form [formGroup]="loginForm" (ngSubmit)="onSubmitLogin()"> -->
              <input
                v-model="userNameLogin"
                type="text"
                placeholder="Name"
                autocomplete="on"
                @keyup="validateUsernameLogin()"
              />
              <input
                v-model="passwordLogin"
                type="password"
                placeholder="Password"
                autocomplete="off"
                @keyup="validatePasswordLogin()"
              />
              <span>
                <input type="checkbox" class="checkbox" />
                Keep me signed in
              </span>
              <!-- <button type="submit" class="btn btn-default"> -->
              <button
                :disabled="usernameErrorLogin.state || passwordErrorLogin.state"
                type="submit"
                class="btn btn-default"
              >
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
            <div class="errors">
              <app-error-message
                :hasError="serverRegisterError.state"
                :errorMessage="serverRegisterError.errorMessage"
              />
              <app-error-message
                :hasError="usernameError.state"
                :errorMessage="usernameError.errorMessage"
              />
              <app-error-message
                :hasError="emailError.state"
                :errorMessage="emailError.errorMessage"
              />
              <app-error-message
                :hasError="passwordError.state"
                :errorMessage="passwordError.errorMessage"
              />
              <app-error-message
                :hasError="repeatePasswordError.state"
                :errorMessage="repeatePasswordError.errorMessage"
              />
            </div>
            <h2>New User Signup!</h2>
            <form class="register-form" @submit.prevent="submitRegister()">
              <!-- <form [formGroup]="registerForm" (ngSubmit)="onSubmitRegister()"> -->
              <input
                v-model="userName"
                type="text"
                placeholder="Name"
                autocomplete="on"
                @keyup="validateUsername()"
              />
              <input
                v-model="emailAdress"
                type="email"
                placeholder="Email Address"
                autocomplete="on"
                @keyup="validateEmail()"
              />
              <input
                v-model="password"
                type="password"
                placeholder="Password"
                autocomplete="off"
                @keyup="validatePassword()"
              />
              <input
                v-model="repeatePassword"
                type="password"
                placeholder="Repeate password"
                autocomplete="off"
                @keyup="validateRepeatePassword()"
              />
              <span>
                <input type="checkbox" class="checkbox" v-model="isAdmin" />
                Are you admin?
              </span>
              <button
                :disabled="
                  usernameError.state ||
                  emailError.state ||
                  passwordError.state ||
                  repeatePasswordError.state
                "
                type="submit"
                class="btn btn-default"
              >
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