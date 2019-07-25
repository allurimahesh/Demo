import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerDetailsRoutingModule } from './customerdetails-routing.module';
import { CustomerDetailsComponent } from './customerdetails.component';
import {SharedModule} from '../shared/shared.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    CustomerDetailsRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  declarations: [CustomerDetailsComponent]
})
export class CustomerDetailsModule { }
