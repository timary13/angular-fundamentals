import { NgModule } from '@angular/core';
import { CoursesComponent } from './courses.component';
import {SharedModule} from "../../shared/shared.module";
import {CourseListModule} from "../course-list/course-list.module";

@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CourseListModule,
    SharedModule
  ],
  exports: [CoursesComponent]
})
export class CoursesModule { }
