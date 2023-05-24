import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export function PasswordValidators(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    const uppercase = /[A-Z]/.test(value);
    const lowercase = /[a-z]/.test(value);
    const digit = /[0-9]/.test(value);
    if (!uppercase || !lowercase || !digit) {
      return { invalidPassword: true };
    }
    return null;
  };
}
