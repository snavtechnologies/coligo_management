import { Routes } from '@angular/router';

import { KycComponent } from './kyc.component';

export const KycRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: 'kyc',
        component: KycComponent
    }]
}
];
