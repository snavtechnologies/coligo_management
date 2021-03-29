import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ComponentModule } from '../../modules/component/component.module';
import { AngularMaterialModule } from '../../modules/angular-material/angular-material.module';
import {WebcamModule} from 'ngx-webcam';
import { CustomerDocumentsRoutingModule } from './customer-documents-routing.module';
import { CustomerDocumentsComponent } from './customer-documents.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    WebcamModule,
    ReactiveFormsModule,
    RouterModule,
    ComponentModule,
    AngularMaterialModule,
    CustomerDocumentsRoutingModule
  ],
  declarations: [CustomerDocumentsComponent]
})
export class CustomerDocumentsModule { }
