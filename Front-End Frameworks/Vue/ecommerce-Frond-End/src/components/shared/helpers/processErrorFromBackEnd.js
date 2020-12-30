import { validateElement } from '../formValidations/formValidations';

const processErrorFromBackEnd = function (response, errorObject) {
  const serverError = {
    errorState: {
      state: true,
      errorMessage: response['error'],
    },
  }
  validateElement(errorObject, serverError);
  console.log(response);
}

export default processErrorFromBackEnd;