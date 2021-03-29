import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees.routing.module';
import { RoleCreateComponent } from './employee-roles/role-create/role-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'app/modules/angular-material/angular-material.module';
import { ComponentModule } from 'app/modules/component/component.module';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { RolesService } from './employee-roles/roles.service';
import { EmployeeOperationsComponent } from './employee-operations/employee-operations.component';
import { MatDialogModule, MatProgressSpinnerModule } from '@angular/material';
import { RoleListComponent } from './employee-roles/role-list/role-list.component';
import { UsernameValidationDirective } from './username-validation.directive';
import { HierarchyService } from '../../services/hierarchy.service';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;


@NgModule({
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    ComponentModule,
    MatCheckboxModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    NgxMaskModule.forRoot()
  ],
  declarations: [
    EmployeeOperationsComponent,
    RoleCreateComponent,
    RoleListComponent,
    UsernameValidationDirective
  ],
  providers: [RolesService, HierarchyService]
})
export class EmployeesModule { }
