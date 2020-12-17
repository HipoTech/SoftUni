import AppErrorMessage from "../../core/ErrorMessage/ErrorMessage.vue";

import { useVuelidate } from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";

export default {
  name: "LoginOrRegister",
  mixins: [useVuelidate],
  validations() {
    return {
      loginUserName: {
        required,
        minLength: minLength(6),
      },
      loginPassword: {
        required,
        minLength: minLength(8),
      }
    }
  },

  data() {
    return {
      loginUserName: '',
      loginPassword: '',
      userName: '',
      email: '',
      password: '',
      repeatePassword: '',
      errorMessageUsername: '',
      errorMessagePassword: '',
      usernameError: {
        state: false,
        errorMessage: ''
      },
      passwordError: {
        state: false,
        errorMessage: ''
      },
    }
  },
  components: {
    AppErrorMessage
  },
  methods: {
    validate(element, requirements) {
      for (const requirement in requirements) {
        if (requirements[requirement].state) {
          element.state = true;
          element.errorMessage = requirements[requirement].errorMessage
          return;
        } else {
          element.state = false;
        }
      }
    },

    validateUsername() {
      this.$v.$touch();
      const requirements = {
        requiredField: {
          state: this.$v.loginUserName.required.$invalid,
          errorMessage: "Username is required!"
        },
        minimumLength: {
          state: this.$v.loginUserName.minLength.$invalid,
          errorMessage: `Username must be atleast ${this.$v.loginUserName.minLength.$params.min} simbols`
        },
      }

      this.validate(this.usernameError, requirements);
    },

    validatePassword() {
      this.$v.$touch();
      const requirements = {
        requiredField: {
          state: this.$v.loginPassword.required.$invalid,
          errorMessage: "Password is required!"
        },
        minimumLength: {
          state: this.$v.loginPassword.minLength.$invalid,
          errorMessage: `Password must be atleast ${this.$v.loginUserName.minLength.$params.min} simbols`
        },
      }

      this.validate(this.usernameError, requirements);
    },
    submitLogin() {
      this.runValidatitionCheck();

    },
  }
};