import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [
    LoginComponent
  ],
  exports: [
    LoginComponent
  ],
  imports: [
    SharedModule,
    FormsModule
  ]
})
export class LoginModule { }
