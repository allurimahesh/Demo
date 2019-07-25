import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerEditDetailsRoutingModule } from './customereditdetails-routing.module';
import { CustomerEditDetailsComponent } from './customereditdetails.component';
import {SharedModule} from '../shared/shared.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    CustomerEditDetailsRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  declarations: [CustomerEditDetailsComponent]
})
export class CustomerEditDetailsModule { }
