import { useVuelidate } from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";

import AppErrorMessage from "../../core/ErrorMessage/ErrorMessage.vue";
import { validateElement } from "../../shared/formValidations/formValidations";

export default {
  name: "Login",
  mixins: [useVuelidate],
  validations() {
    return {
      userNameLogin: {
        required,
        minLength: minLength(6),
      },
      passwordLogin: {
        required,
      },
    }
  },

  data: function () {
    return {
      userNameLogin: '',
      passwordLogin: '',
      usernameErrorLogin: {
        state: true,
        errorMessage: ''
      },
      passwordErrorLogin: {
        state: true,
        errorMessage: ''
      },
    }
  },
  components: {
    AppErrorMessage
  },
  methods: {
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
    submitLogin() {

    },
  }
};