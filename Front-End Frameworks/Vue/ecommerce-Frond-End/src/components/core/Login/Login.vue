<template>
  <div class="login-form">
    <app-error-message
      :hasError="usernameError.state"
      :errorMessage="usernameError.errorMessage"
    />
    <app-error-message
      :hasError="passwordError.state"
      :errorMessage="passwordError.errorMessage"
    />
    <h2>Login to your account</h2>
    <form @submit.prevent="submitLogin">
      <!-- <form [formGroup]="loginForm" (ngSubmit)="onSubmitLogin()"> -->
      <input
        v-model="userName"
        type="text"
        placeholder="Name"
        autocomplete="on"
        @keyup="validateUsername()"
      />
      <input
        v-model="password"
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
        :disabled="usernameError.state || passwordError.state"
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