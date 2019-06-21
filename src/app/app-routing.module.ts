import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TableColorsComponent } from './table-colors/table-colors.component';
import { GuardService } from './guard/guard.service';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'colors',
    component: TableColorsComponent,
    canActivate: [GuardService]
  },
  {
    path: 'colors2',
    component: TableColorsComponent,
    canActivate: [GuardService]
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
