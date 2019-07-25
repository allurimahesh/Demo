import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContentPageComponent} from './contentpage.component';

const routes: Routes = [
  {
    path: '',
    component: ContentPageComponent,
    data: {
      breadcrumb: 'ContentPage',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentPageRoutingModule { }
