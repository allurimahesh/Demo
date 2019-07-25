import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerEditDetailsComponent} from './customereditdetails.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerEditDetailsComponent,
    data: {
      breadcrumb: 'CustomerDetails'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerEditDetailsRoutingModule { }
