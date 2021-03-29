import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../modules/angular-material/angular-material.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar.component';
import {
  MatCardModule
} from '@angular/material';

@NgModule({
    imports: [ RouterModule, CommonModule, MatCardModule, FormsModule,
      ReactiveFormsModule,
      AngularMaterialModule ],
    declarations: [ SidebarComponent ],
    exports: [ SidebarComponent ]
})

export class SidebarModule {}
