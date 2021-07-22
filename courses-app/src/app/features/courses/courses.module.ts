import { NgModule } from '@angular/core';
import { CoursesComponent } from './courses.component';
import {SharedModule} from "../../shared/shared.module";
import {CourseListModule} from "../course-list/course-list.module";
import { CouresRoutingModule } from './courses-routing.module';
import { AuthorizedGuard } from 'src/app/auth/guards/authorized.guard';

@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CouresRoutingModule,
    CourseListModule,
    SharedModule
  ],
  providers: [AuthorizedGuard],
  exports: [CoursesComponent]
})
export class CoursesModule { }
