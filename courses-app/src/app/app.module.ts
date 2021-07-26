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
import { StoreModule } from '@ngrx/store';
import { effects, reducers } from './store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      autoPause: true,
    }),
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
