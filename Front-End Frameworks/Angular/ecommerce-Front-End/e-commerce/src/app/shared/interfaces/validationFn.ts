import { AbstractControl, ValidationErrors } from '@angular/forms';

export interface ValidatorFn { (c: AbstractControl): ValidationErrors | null; }