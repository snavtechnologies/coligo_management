import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeOperationsComponent } from './employee-operations/employee-operations.component';
import { RoleCreateComponent } from './employee-roles/role-create/role-create.component';
import { RoleListComponent } from './employee-roles/role-list/role-list.component';


const routes: Routes = [
  {

    path: '',
    children: [ {
      path: 'operations',
      component: EmployeeOperationsComponent
    },
    {
      path: 'roles',
      component: RoleListComponent
    },
    {
    path: 'role-create',
    component: RoleCreateComponent
    }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
