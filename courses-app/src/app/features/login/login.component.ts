import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel} from "@angular/forms";
import { Router } from '@angular/router';
import { IconName } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/auth/services/auth.service';
import { titleCase } from "../helpers";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss','../registration/registration.component.scss']
})
export class LoginComponent implements OnInit {
  public visiblePasswordIcon: IconName = 'eye';
  public unvisiblePasswordIcon: IconName = 'eye-slash';

  constructor(private authService: AuthService, private router: Router) {
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

  public onLoginClick(loginForm: NgForm) {
    this.authService.login({
      email: loginForm.value.login,
      password: loginForm.value.password
    })
    .subscribe(
      () => this.router.navigate(['/courses']),
    );
  }

}
