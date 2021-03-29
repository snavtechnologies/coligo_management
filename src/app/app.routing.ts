import { Routes } from '@angular/router';
import { LoginComponent } from './layouts/auth/login.component';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthGuardService } from './layouts/auth/guards/auth-guard.service';
import { ChangeKeyComponent } from './components/change-key/change-key.component';


export const AppRoutes: Routes = [ {
  path: '',
  redirectTo: '/login',
  pathMatch: 'full',
}, {
      path: 'login',
      component: LoginComponent
    }
    , {
        path: '',
        component: AdminLayoutComponent,
        canActivate : [AuthGuardService],
        children:
        [
          {
            path: 'dashboard',
            loadChildren: './menu_components/dashboard/dashboard.module#DashboardModule'
          },
          {
            path: '',
            loadChildren: './menu_components/user/kyc/kyc.module#KycModule'
          },
          {
            path: 'customer-documents',
            loadChildren: './menu_components/customer-documents/customer-documents.module#CustomerDocumentsModule'
          },
          {
            path: 'employees',
            loadChildren: './menu_components/employees/employees.module#EmployeesModule'
          },
          {
            path: 'change-key/:username',
            loadChildren: './components/change-key/change-key.module#ChangeKeyModule'
          }
        ]
      }
    ];
