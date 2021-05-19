import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EmailValidator, PasswordValidator} from "../../shared/directives";
import {titleCase} from "../helpers";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registrationForm = formBuilder.group({
      "name": ['', [Validators.required, Validators.minLength(6)]],
      "email": ['', [Validators.required, EmailValidator]],
      "password": ['', [ Validators.required, PasswordValidator]],
    });
  }

  ngOnInit(): void {
  }

  private isEmptyInput(controlName: string): boolean {
    return this.registrationForm.controls[controlName].touched && !this.registrationForm.controls[controlName].value;
  }

  private isIncorrectInput(controlName: string): boolean {
    return this.registrationForm.controls[controlName].invalid && this.registrationForm.controls[controlName].touched;
  }

  public checkInvalid(controlName: string): () => boolean {
    return () => (this.isEmptyInput(controlName) || this.isIncorrectInput(controlName));
  }

  public getErrorMessage(controlName: string): () => string {
    const name = titleCase(controlName);
    return () => (this.isEmptyInput(controlName) ?
      `${name} is required.` :
      this.isIncorrectInput(controlName) ?
      `${name} is incorrect.`: `${name} is required.`);
  }

  public submit() {
    this.registrationForm.markAllAsTouched();
    this.registrationForm.updateValueAndValidity();
  }
}
