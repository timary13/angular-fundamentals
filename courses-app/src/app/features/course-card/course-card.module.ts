import { NgModule } from '@angular/core';
import {SharedModule} from "../../shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";
import {CourseCardComponent} from "./course-card.component";

@NgModule({
  declarations: [
    CourseCardComponent
  ],
  exports: [
    CourseCardComponent
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class CourseCardModule { }
