import {AbstractControl, NG_VALIDATORS, Validator} from "@angular/forms";
import {Directive} from "@angular/core";

export function PasswordValidator(control: AbstractControl): {[key: string]: any} | null {
  const passwordRegexp = /[a-zA-z0-9]{6,}/;
  return passwordRegexp.test(control.value) ? null : { 'passwordInvalid': true };
}

@Directive({
  selector: '[password]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: PasswordValidatorDirective,
    multi: true,
  }]
})
export class PasswordValidatorDirective implements Validator {
  validate(control: AbstractControl): {[key: string]: any} | null {
    return PasswordValidator(control);
  }
}
