import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentModule } from '../../../modules/component/component.module';
import { AngularMaterialModule } from '../../../modules/angular-material/angular-material.module';
import { NgxMaskModule } from 'ngx-mask';

import { KycComponent } from './kyc.component';
import { KycRoutes } from './kyc.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(KycRoutes),
        FormsModule,
        ReactiveFormsModule,
        AngularMaterialModule,
        ComponentModule,
        NgxMaskModule.forRoot()
    ],
    declarations: [KycComponent]
})

export class KycModule {}
