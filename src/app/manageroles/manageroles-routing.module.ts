import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ManageRolesComponent} from './manageroles.component';

const routes: Routes = [
  {
    path: '',
    component: ManageRolesComponent,
    data: {
      breadcrumb: 'ManageRoles',
      title: 'Manageroles'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageRolesRoutingModule { }
