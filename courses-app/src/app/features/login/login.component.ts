import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel} from "@angular/forms";
import { titleCase } from "../helpers";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../registration/registration.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  private isEmptyInput(control: NgModel): boolean {
    return !!(control.touched && !control.value);
  }

  private isIncorrectInput(control: NgModel): boolean {
    return !!(control.invalid && control.touched);
  }

  public checkInvalid(control: NgModel): () => boolean {
    return () => (this.isEmptyInput(control) || this.isIncorrectInput(control));
  }

  public getErrorMessage(control: any): () => string {
    const controlName = titleCase(control.name);
    return () => (this.isEmptyInput(control) ?
      `${controlName} is required.` :
      this.isIncorrectInput(control) ?
      `${controlName} is incorrect.`: `${controlName} is required.`);
  }

  public submit(loginForm: NgForm) {

  }

}
