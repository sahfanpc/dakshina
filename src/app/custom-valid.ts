import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

export function isTenAsync(
  control: AbstractControl
): Observable<ValidationErrors | null> {
  const value: string = control.value;
  const uppercase = /[A-Z]/.test(value);
  const lowercase = /[a-z]/.test(value);
  const digit = /[0-9]/.test(value);
  if (!uppercase || !lowercase || !digit) {
    // Emit an object with a validation error.
    return of({ invalidPassword: true });
  }
  // Emit null, to indicate no error occurred.
  return of(null);
}
