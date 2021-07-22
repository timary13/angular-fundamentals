import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesModule } from "./features/courses/courses.module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginModule } from "./features/login/login.module";
import { CourseModule } from "./features/course/course.module";
import { RegistrationModule } from "./features/registration/registration.module";
import { CourseListModule } from "./features/course-list/course-list.module";
import { TokenInterceptor } from './auth/interceptors/token.interceptor';
import { AuthorizedGuard } from './auth/guards/authorized.guard';
import { WINDOW_PROVIDERS } from './services/window.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoursesModule,
    FontAwesomeModule,
    LoginModule,
    CourseModule,
    RegistrationModule,
    CourseListModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }, WINDOW_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
