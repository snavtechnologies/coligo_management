import { Injectable } from '@angular/core';
import { RouteInfo } from '../common_interfaces/menuservice.model';



// Menu Items
export const ROUTES: RouteInfo[] = [
{
  path: '/dashboard',
  title: 'Dashboard',
  type: 'link',
  icontype: 'dashboard'
},
/*{
  path: '/kyc',
  title: 'Customer Management(KYC)',
  type: 'link',
  icontype: 'person'
},

{
  path: '/customer-documents',
  title: 'Customer Documents',
  type: 'link',
  icontype: 'add_photo_alternate'
},*/

{
  path: '/employees',
  title: 'Employees',
  type: 'sub',
  icontype: 'groups',
  collapse: 'Operations',
  children: [
    {
      path: 'operations',
      title: 'Operations',
      type: 'link',
      ab: 'OP'
    },
    {
      path: 'roles',
      title: 'Roles',
      type: 'link',
      ab: 'RL'
    }
  ]
}
];

@Injectable({
  providedIn: 'root'
})
export class MenuserviceService {

  constructor() { }

  get_routes() {
    return ROUTES;
  }

}
