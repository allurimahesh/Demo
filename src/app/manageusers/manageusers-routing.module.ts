import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ManageUsersComponent} from './manageusers.component';

const routes: Routes = [
  {
    path: '',
    component: ManageUsersComponent,
    data: {
      breadcrumb: 'ManageUsers',
      title: 'Manageusers',
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageUsersRoutingModule { }
