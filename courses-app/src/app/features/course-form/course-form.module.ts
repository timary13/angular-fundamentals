import { NgModule } from '@angular/core';
import {SharedModule} from "../../shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";
import {CourseFormComponent} from "./course-form.component";

@NgModule({
  declarations: [
    CourseFormComponent
  ],
  exports: [
    CourseFormComponent
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule
  ]
})
export class CourseFormModule { }
