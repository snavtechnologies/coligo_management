import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  CustomerDocumentsComponent } from './customer-documents.component';
const routes: Routes = [
  {

    path: '',
    children: [ {
      path: '',
      component: CustomerDocumentsComponent
  }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerDocumentsRoutingModule { }
