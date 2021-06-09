import { NgModule } from '@angular/core';
import {SharedModule} from "../../shared/shared.module";
import {CourseListComponent} from "./course-list.component";
import {CourseCardModule} from "../course-card/course-card.module";

@NgModule({
  declarations: [
    CourseListComponent
  ],
  exports: [
    CourseListComponent
  ],
  imports: [
    CourseCardModule,
    SharedModule,
  ]
})
export class CourseListModule { }
