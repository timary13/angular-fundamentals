import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from 'src/app/user/guards/admin.guard';

import { CourseComponent } from './course.component';

const routes: Routes = [
  { 
    path: '', 
    component: CourseComponent,  
  },
  {
    path: 'add',
    loadChildren: () => import('../course/course.module').then(module => module.CourseModule),
    canActivate: [AdminGuard]
  },
  {
    path: ':id',
    loadChildren: () => import('../course/course.module').then(module => module.CourseModule),
  },
  {
    path: 'edit/:id',
    loadChildren: () => import('../course/course.module').then(module => module.CourseModule),
    canActivate: [AdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }