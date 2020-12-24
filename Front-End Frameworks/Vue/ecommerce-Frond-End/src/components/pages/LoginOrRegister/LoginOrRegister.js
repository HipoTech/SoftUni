import { useVuelidate } from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";

import { validateElement } from "../../shared/formValidations/formValidations";
import AppErrorMessage from "../../core/ErrorMessage/ErrorMessage.vue";
import apiService from "../../shared/api/ApiService";

export default {
  name: "LoginOrRegister",
  mixins: [useVuelidate],


  validations() {
    const passwordHasCapitalLetter = (value) => {
      const regex = /[A-Z]+/g;
      return regex.test(value);
    };
    const emailRegexCheck = (value) => {
      const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/g;
      return regex.test(value);
    };
    const matchPasswords = () => {
      const matchCheck = this.password === this.repeatePassword;
      return matchCheck;
    }
    return {
      userName: {
        required,
        minLength: minLength(4),
      },
      emailAdress: {
        required,
        emailRegexCheck,
      },
      password: {
        required,
        minLength: minLength(6),
        passwordHasCapitalLetter,
      },
      repeatePassword: {
        required,
        matchPasswords,
      },
      userNameLogin: {
        required,
        minLength: minLength(4),
      },
      passwordLogin: {
        required,
      },
    }
  },

  data: function () {
    return {
      userName: '',
      emailAdress: '',
      password: '',
      repeatePassword: '',
      isAdmin: false,
      userNameLogin: '',
      passwordLogin: '',
      usernameError: {
        state: true,
        errorMessage: ''
      },
      emailError: {
        state: true,
        errorMessage: ''
      },
      passwordError: {
        state: true,
        errorMessage: ''
      },
      repeatePasswordError: {
        state: true,
        errorMessage: ''
      },
      usernameErrorLogin: {
        state: true,
        errorMessage: ''
      },
      passwordErrorLogin: {
        state: true,
        errorMessage: ''
      },
      serverRegisterError: {
        state: true,
        errorMessage: ''
      },
      serverLoginError: {
        state: true,
        errorMessage: ''
      },
    }
  },

  methods: {
    validateUsername() {
      this.$v.$touch();
      const requirements = {
        requiredField: {
          state: this.$v.userName.required.$invalid,
          errorMessage: "Username is required!"
        },
        minimumLength: {
          state: this.$v.userName.minLength.$invalid,
          errorMessage: `Username must be atleast ${this.$v.userName.minLength.$params.min} simbols`
        },
      }

      validateElement(this.usernameError, requirements);
    },

    validateEmail() {
      this.$v.$touch();
      const requirements = {
        requiredField: {
          state: this.$v.emailAdress.required.$invalid,
          errorMessage: "Email is required!"
        },
        emailRegexCheck: {
          state: this.$v.emailAdress.emailRegexCheck.$invalid,
          errorMessage: `Email is not valid! Please check if it is correct.`
        },
      }

      validateElement(this.emailError, requirements);
    },

    validatePassword() {
      this.$v.$touch();
      const requirements = {
        requiredField: {
          state: this.$v.password.required.$invalid,
          errorMessage: "Password is required!"
        },
        minimumLength: {
          state: this.$v.password.minLength.$invalid,
          errorMessage: `Password must be atleast ${this.$v.password.minLength.$params.min} simbols`
        },
        passwordHasCapitalLetter: {
          state: this.$v.password.passwordHasCapitalLetter.$invalid,
          errorMessage: `Password must contain at least one capital letter!`
        },
      }

      validateElement(this.passwordError, requirements);
      this.validateRepeatePassword();
    },

    validateRepeatePassword() {

      this.$v.$touch();
      const requirements = {
        requiredField: {
          state: this.$v.repeatePassword.required.$invalid,
          errorMessage: "Please repeate the password!"
        },
        passwordMatchCheck: {
          state: this.$v.repeatePassword.matchPasswords.$invalid,
          errorMessage: "Passwords do not match!"
        }
      }

      validateElement(this.repeatePasswordError, requirements);
    },

    validateUsernameLogin() {
      this.$v.$touch();
      const requirements = {
        requiredField: {
          state: this.$v.userNameLogin.required.$invalid,
          errorMessage: "Username is required!"
        },
        minimumLength: {
          state: this.$v.userNameLogin.minLength.$invalid,
          errorMessage: `Username must be atleast ${this.$v.userNameLogin.minLength.$params.min} simbols`
        },
      }

      validateElement(this.usernameErrorLogin, requirements);
    },

    validatePasswordLogin() {
      this.$v.$touch();
      const requirements = {
        requiredField: {
          state: this.$v.passwordLogin.required.$invalid,
          errorMessage: "Password is required!"
        },
      }

      validateElement(this.passwordErrorLogin, requirements);
    },

    submitRegister() {
      const registerUserData = {
        userName: this.userName,
        password: this.password,
        email: this.emailAdress,
        imageUrl: "just for test",
        isAdmin: this.isAdmin,
      };
      apiService.registerUser(registerUserData)
        .then(serverResponse => {
          if (!serverResponse.ok) {
            const serverError = {
              errorState: {
                state: true,
                errorMessage: "Username or email is already in use",
              },
            }
            validateElement(this.serverRegisterError, serverError);
          }
        })
        .catch(e => console.log(e))
    },

    submitLogin() {
      const loginUserData = {
        userName: this.userNameLogin,
        password: this.passwordLogin,
      };
      apiService.logInUser(loginUserData)
        .then(serverResponse => {
          if (!serverResponse.ok) {
            const serverError = {
              errorState: {
                state: true,
                errorMessage: "Username or password are incorrect",
              },
            }
            validateElement(this.serverLoginError, serverError);
          } else {
            serverResponse.json().then(e => console.log(e.userName)) // here i have to pass the user to the app
          }
        })
        .catch(e => console.log(e))
    },
  },
  components: {
    AppErrorMessage
  },
};