import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotAuthorizedGuard } from 'src/app/auth/guards/not-authorized.guard';
import { RegistrationComponent } from './registration.component';

const routes: Routes = [
  { 
    path: '', 
    component: RegistrationComponent,
    canActivate: [NotAuthorizedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }