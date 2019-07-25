import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentPageRoutingModule } from './contentpage-routing.module';
import { ContentPageComponent } from './contentpage.component';
import {SharedModule} from '../shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import { SafePipe } from './safe.pipe';

@NgModule({
  imports: [
    CommonModule,
    ContentPageRoutingModule,
    SharedModule,
    HttpClientModule,
  ],
  declarations: [ContentPageComponent, SafePipe]
})
export class ContentPageModule { }
