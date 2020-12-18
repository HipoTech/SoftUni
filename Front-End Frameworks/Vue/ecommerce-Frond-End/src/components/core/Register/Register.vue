<template>
  <div class="signup-form">
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
    <h2>New User Signup!</h2>
    <form>
      <!-- <form [formGroup]="registerForm" (ngSubmit)="onSubmitRegister()"> -->
      <input
        v-model="userName"
        type="text"
        placeholder="Name"
        autocomplete="on"
        @keyup="validateUsername()"
      />
      <input
        v-model="email"
        type="email"
        placeholder="Email Address"
        autocomplete="on"
      />
      <div formGroupName="passwords">
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          autocomplete="off"
        />
        <input
          v-model="repeatePassword"
          type="password"
          placeholder="Repeate password"
          autocomplete="off"
        />
      </div>
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
</template>

<script src="./Register"></script>
<style scoped src="./Register.scss" lang="scss"></style>