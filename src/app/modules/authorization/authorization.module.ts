import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ComponentModule } from '../component/component.module';


import { LoginComponent } from '../../layouts/auth/login.component';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    ComponentModule
  ],
  declarations: [LoginComponent]
})
export class AuthorizationModule { }
