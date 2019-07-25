import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageUsersComponent } from './manageusers.component';
import {ManageUsersRoutingModule} from './manageusers-routing.module'
import {SharedModule} from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'


@NgModule({
  imports: [
    CommonModule,
    ManageUsersRoutingModule,
    SharedModule,
   HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [ManageUsersComponent],
  providers: []
})
export class ManageUsersModule { }
