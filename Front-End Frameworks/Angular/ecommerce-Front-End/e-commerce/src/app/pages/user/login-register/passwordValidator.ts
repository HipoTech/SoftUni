import { AbstractControl } from '@angular/forms';
export function matchPasswords(control: AbstractControl) {
  return control.value.password === control.value.repeatePassword ? null : { matchPasswords: true };
}