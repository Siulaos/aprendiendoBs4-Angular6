import { Injectable } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';

@Injectable()
export class ValidatorService {
  registerForm: FormGroup;

  constructor() {}

  public genericValidator(inputControl: AbstractControl): string {

    if (null != inputControl.errors) {
      if (inputControl.errors.required) {
        return 'required';
      } else if (inputControl.errors.pattern) {
        return 'formatInvalid';
      } else {
        return '';
      }
    } else {
      return '';
    }
  }
}
