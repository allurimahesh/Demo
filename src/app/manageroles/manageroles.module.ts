import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ManageRolesComponent} from './manageroles.component';
import {ManageRolesRoutingModule} from './manageroles-routing.module';
import {SharedModule} from '../shared/shared.module';
import {RoleService} from './role.service';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TreeviewModule } from 'ngx-treeview';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        HttpClientModule,
        ManageRolesRoutingModule,
        TreeviewModule.forRoot()
     ],

     declarations: [ManageRolesComponent],
     providers: [RoleService],
     })

    export class ManageRolesModule {}
