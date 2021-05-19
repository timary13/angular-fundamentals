import {AbstractControl, NG_VALIDATORS, Validator} from "@angular/forms";
import {Directive} from "@angular/core";

export function EmailValidator(control: AbstractControl): {[key: string]: any} | null {
  const emailRegexp = /\S+@\S+\.\S+/;
  return emailRegexp.test(control.value) ? null : { 'emailInvalid': true };
}

@Directive({
  selector: '[email]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: EmailValidatorDirective,
    multi: true,
  }]
})
export class EmailValidatorDirective implements Validator {
  validate(control: AbstractControl): {[key: string]: any} | null {
    return EmailValidator(control);
  }
}
