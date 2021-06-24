import { NgModule } from '@angular/core';
import { CourseComponent } from './course.component';
import {SharedModule} from "../../shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";
import {CourseFormModule} from "../course-form/course-form.module";
import { CourseRoutingModule } from './course-routing.module';

@NgModule({
  declarations: [
    CourseComponent
  ],
  exports: [
    CourseComponent
  ],
  imports: [
    CourseRoutingModule,
    SharedModule,
    CourseFormModule,
    ReactiveFormsModule
  ]
})
export class CourseModule { }
