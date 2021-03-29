import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from 'app/modules/angular-material/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentModule } from 'app/modules/component/component.module';
import {MatCardModule} from '@angular/material/card';
import { ChangeKeyRoutingModule } from './change-key.routing.module';
import { ChangeKeyComponent } from './change-key.component';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentModule,
    MatCardModule,
    ChangeKeyRoutingModule
  ],
  declarations: [ChangeKeyComponent]
})
export class ChangeKeyModule { }
