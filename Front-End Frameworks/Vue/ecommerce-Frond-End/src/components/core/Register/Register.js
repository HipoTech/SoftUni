import { useVuelidate } from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";

import AppErrorMessage from "../ErrorMessage/ErrorMessage.vue";
import { validateElement } from "../../shared/formValidations";

export default {
  name: "Register",
  mixins: [useVuelidate],
  validations() {
    const hasCapitalLetter = (value) => {
      const regex = RegExp('[A-Z]+', 'g');
      return regex.test(value);
    };
    const matchPasswords = () => {
      const state = this.password === this.repeatePassword;
      return state;
    }
    return {
      userName: {
        required,
        minLength: minLength(6),
      },
      email: {
        required,
        minLength: minLength(6),
      },
      password: {
        required,
        minLength: minLength(8),
        hasCapitalLetter,
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
      email: '',
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
  components: {
    AppErrorMessage
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
          state: this.$v.password.hasCapitalLetter.$invalid,
          errorMessage: `Password must contain at least one capital letter!`
        },
      }

      validateElement(this.passwordError, requirements);
    },
    submitLogin() {
      this.runValidatitionCheck();

    },
  }
};