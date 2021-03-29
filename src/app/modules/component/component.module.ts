import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask'

import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { TabLayoutComponent } from '../../components/tab-layout/tab-layout.component';
import { DummyComponent } from '../../components/dummy/dummy.component';
import { Dummy2Component } from '../../components/dummy2/dummy2.component';
import { HtmlComponentsComponent } from '../../components/html-components/html-components.component';
import { SearchBoxComponent } from '../../components/search-box/search-box.component';
import { TableComponent } from '../../components/table/table.component';
import { DynamicTemplateComponent } from '../../components/dynamic-template/dynamic-template.component';
import { PopupComponent } from '../../components/popup/popup.component';
import { LockscreenComponent } from '../../layouts/auth/lockscreen/lockscreen.component';

import { ExportAsModule } from 'ngx-export-as';

import { AngularMaterialModule } from '../angular-material/angular-material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    ExportAsModule,
    NgxMaskModule.forRoot()

  ],
  // tslint:disable-next-line:max-line-length
  exports: [LoginFormComponent, TabLayoutComponent, DummyComponent, HtmlComponentsComponent, Dummy2Component, SearchBoxComponent, TableComponent, DynamicTemplateComponent, PopupComponent, LockscreenComponent],
  // tslint:disable-next-line:max-line-length
  declarations: [LoginFormComponent, TabLayoutComponent, DummyComponent, HtmlComponentsComponent, Dummy2Component, SearchBoxComponent, TableComponent, DynamicTemplateComponent, PopupComponent, LockscreenComponent]
})
export class ComponentModule { }
