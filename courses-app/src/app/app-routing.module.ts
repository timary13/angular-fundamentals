import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizedGuard } from './auth/guards/authorized.guard';
import { NotAuthorizedGuard } from './auth/guards/not-authorized.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./features/login/login.module').then(module => module.LoginModule),
    canActivate: [NotAuthorizedGuard]
  },
  {
    path: 'registration',
    loadChildren: () => import('./features/registration/registration.module').then(module => module.RegistrationModule),
    canActivate: [NotAuthorizedGuard]
  },
  {
    path: 'courses',
    loadChildren: () => import('./features/courses/courses.module').then(module => module.CoursesModule),
    canLoad: [AuthorizedGuard]
  },
  {
    path: '',
    redirectTo: '/courses',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
