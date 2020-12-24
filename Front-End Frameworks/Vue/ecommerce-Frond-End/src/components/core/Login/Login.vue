<template>
  <div class="login-form">
    <app-error-message
      :hasError="usernameErrorLogin.state"
      :errorMessage="usernameErrorLogin.errorMessage"
    />
    <app-error-message
      :hasError="passwordErrorLogin.state"
      :errorMessage="passwordErrorLogin.errorMessage"
    />
    <h2>Login to your account</h2>
    <form @submit.prevent="submitLogin">
      <!-- <form [formGroup]="loginForm" (ngSubmit)="onSubmitLogin()"> -->
      <input
        v-model="userNameLogin"
        type="text"
        placeholder="Name"
        autocomplete="on"
        @keyup="validateUsername()"
      />
      <input
        v-model="passwordLogin"
        type="password"
        placeholder="Password"
        autocomplete="off"
        @keyup="validatePassword()"
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
</template>

<script src="./Login"></script>
<style scoped src="./Login.scss" lang="scss"></style>