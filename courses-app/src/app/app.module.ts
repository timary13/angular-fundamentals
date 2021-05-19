import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoursesModule} from "./features/courses/courses.module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {LoginModule} from "./features/login/login.module";
import {CourseModule} from "./features/course/course.module";
import {RegistrationModule} from "./features/registration/registration.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoursesModule,
    FontAwesomeModule,
    LoginModule,
    CourseModule,
    RegistrationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
