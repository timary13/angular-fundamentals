import { NgModule } from '@angular/core';
import { CourseComponent } from './course.component';
import {SharedModule} from "../../shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";
import {CourseFormModule} from "../course-form/course-form.module";

@NgModule({
  declarations: [
    CourseComponent
  ],
  exports: [
    CourseComponent
  ],
  imports: [
    SharedModule,
    CourseFormModule,
    ReactiveFormsModule
  ]
})
export class CourseModule { }
