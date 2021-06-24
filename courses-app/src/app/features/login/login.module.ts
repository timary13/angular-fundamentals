import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [
    LoginComponent
  ],
  exports: [
    LoginComponent
  ],
  imports: [
    LoginRoutingModule,
    SharedModule,
    FormsModule,
  ]
})
export class LoginModule { }
