import { useVuelidate } from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";

import AppErrorMessage from "../../core/ErrorMessage/ErrorMessage.vue";
import { validateElement } from "../../shared/formValidations";

export default {
  name: "Login",
  mixins: [useVuelidate],
  validations() {
    return {
      userName: {
        required,
        minLength: minLength(6),
      },
      password: {
        required,
      },
    }
  },

  data: function () {
    return {
      userName: '',
      password: '',
      usernameError: {
        state: true,
        errorMessage: ''
      },
      passwordError: {
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
      }

      validateElement(this.passwordError, requirements);
    },
    submitLogin() {

    },
  }
};