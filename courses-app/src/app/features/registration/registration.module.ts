import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";

import { RegistrationComponent } from './registration.component';
import {SharedModule} from "../../shared/shared.module";
import { RegistrationRoutingModule } from './registration-routing.module';

@NgModule({
  declarations: [
    RegistrationComponent
  ],
  exports: [
    RegistrationComponent
  ],
  imports: [
    RegistrationRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class RegistrationModule { }
