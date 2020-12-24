import { useVuelidate } from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";

import AppErrorMessage from "../ErrorMessage/ErrorMessage.vue";
import { validateElement } from "../../shared/formValidations/formValidations";

export default {
  name: "Register",
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
    }
  },

  data: function () {
    return {
      userName: '',
      emailAdress: '',
      password: '',
      repeatePassword: '',
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
      console.log(this.$v);
      const requirements = {
        requiredField: {
          state: this.$v.emailAdress,
          errorMessage: "Email is required!"
        },
        emailRegexCheck: {
          state: this.$v.emailAdress,
          errorMessage: `Email is not valid! Please check if it is correct.`
        },
      }

      validateElement(this.emailError, requirements);
    },

    validatePassword() {

      this.$v.$touch();
      console.log(this.$v);
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
          state: this.$v.password.hasCapitalLetter.$invalid,
          errorMessage: `Password must contain at least one capital letter!`
        },
        passwordHasDigitLetter: {
          state: this.$v.password.hasCapitalLetter.$invalid,
          errorMessage: `Password must contain at least one digit letter!`
        },
      }

      validateElement(this.passwordError, requirements);
    },

    validateRepeatePassword() {

      this.$v.$touch();
      const requirements = {
        requiredField: {
          state: this.$v.repeatePassword.required.$invalid,
          errorMessage: "Password is required!"
        },
        passwordMatchCheck: {
          state: this.$v.repeatePassword.matchPasswords.$invalid,
          errorMessage: "Passwords do not match!"
        }
      }

      validateElement(this.repeatePasswordError, requirements);
    },
    submitLogin() {
      this.runValidatitionCheck();

    },
  },

  components: {
    AppErrorMessage
  },
};