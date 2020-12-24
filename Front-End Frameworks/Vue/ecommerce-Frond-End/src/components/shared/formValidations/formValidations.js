const validateElement = function (element, requirements) {
  for (const requirement in requirements) {
    if (requirements[requirement].state) {
      element.state = true;
      element.errorMessage = requirements[requirement].errorMessage
      return;
    } else {
      element.state = false;
    }
  }
}

export {
  validateElement,
}