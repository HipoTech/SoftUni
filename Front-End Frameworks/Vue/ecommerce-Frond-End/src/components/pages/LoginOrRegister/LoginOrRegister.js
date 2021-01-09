import { validationMixin } from 'vuelidate';
import { required, minLength } from 'vuelidate/lib/validators';

import { validateElement } from "../../shared/formValidations/formValidations";
import cookieParser from '../../shared/helpers/cookieParser';
import apiService from "../../shared/api/ApiService";
import router from '../../../router';
import processErrorFromBackEnd from '../../shared/helpers/processErrorFromBackEnd';

import AppErrorMessage from "../../core/ErrorMessage/ErrorMessage.vue";

export default {
  name: "LoginOrRegister",
  mixins: [validationMixin],


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
          state: !this.$v.userName.required,
          errorMessage: "Username is required!"
        },
        minimumLength: {
          state: !this.$v.userName.minLength,
          errorMessage: `Username must be atleast ${this.$v.userName.$params.minLength.min} simbols`
        },
      }

      validateElement(this.usernameError, requirements);
    },

    validateEmail() {
      this.$v.$touch();
      const requirements = {
        requiredField: {
          state: !this.$v.emailAdress.required,
          errorMessage: "Email is required!"
        },
        emailRegexCheck: {
          state: !this.$v.emailAdress.emailRegexCheck,
          errorMessage: `Email is not valid! Please check if it is correct.`
        },
      }

      validateElement(this.emailError, requirements);
    },

    validatePassword() {
      this.$v.$touch();
      const requirements = {
        requiredField: {
          state: !this.$v.password.required,
          errorMessage: "Password is required!"
        },
        minimumLength: {
          state: !this.$v.password.minLength,
          errorMessage: `Password must be atleast ${this.$v.password.$params.minLength.min} simbols`
        },
        passwordHasCapitalLetter: {
          state: !this.$v.password.passwordHasCapitalLetter,
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
          state: !this.$v.repeatePassword.required,
          errorMessage: "Please repeate the password!"
        },
        passwordMatchCheck: {
          state: !this.$v.repeatePassword.matchPasswords,
          errorMessage: "Passwords do not match!"
        }
      }

      validateElement(this.repeatePasswordError, requirements);
    },

    validateUsernameLogin() {
      this.$v.$touch();
      const requirements = {
        requiredField: {
          state: !this.$v.userNameLogin.required,
          errorMessage: "Username is required!"
        },
        minimumLength: {
          state: !this.$v.userNameLogin.minLength,
          errorMessage: `Username must be atleast ${this.$v.userNameLogin.$params.minLength.min} simbols`
        },
      }

      validateElement(this.usernameErrorLogin, requirements);
    },

    validatePasswordLogin() {
      this.$v.$touch();
      const requirements = {
        requiredField: {
          state: !this.$v.passwordLogin.required,
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
            serverResponse
              .json()
              .then(response => processErrorFromBackEnd(response, this.serverLoginError))
              .catch(e => console.log(`Error from backend response: ${e}`));
          } else {
            serverResponse
              .json()
              .then(() => {
                const user = cookieParser('ecom-user-info');
                this.$store.commit('logInUser', user);
                router.push({ name: 'Home' });
              })
              .catch(e => console.log(`Error while making call to the login server: ${e}`));
          }
        })
        .catch(e => console.log(e))
    },


  },

  components: {
    AppErrorMessage
  },
};