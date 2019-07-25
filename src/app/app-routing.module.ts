import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './layouts/admin/admin.component';
import {AuthComponent} from './auth/auth.component';
import {AuthGuard} from './auth/guards/auth.guard';
import {AuthService} from './auth/guards/auth.service';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: '/auth/login',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [AuthGuard]
      },
      {
        path: 'manageroles',
        loadChildren: () => import('./manageroles/manageroles.module').then(m => m.ManageRolesModule)
      },
      {
        path: 'manageusers',
        loadChildren: () => import('./manageusers/manageusers.module').then(m => m.ManageUsersModule)
      },
      {
        path: 'customerdetails',
        loadChildren: () => import('./customerdetails/customerdetails.module').then(m => m.CustomerDetailsModule)
      },
      {
        path: 'customereditdetails',
        loadChildren: () => import('./customereditdetails/customereditdetails.module').then(m => m.CustomerEditDetailsModule)
      },
      {
        path: 'contentpage',
        loadChildren: () => import('./contentpage/contentpage.module').then(m => m.ContentPageModule)
      },
    ]
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
      },
    ]
  },
  {
    path: '**',
    redirectTo: '/dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, AuthService]
})
export class AppRoutingModule { }
