import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangeKeyComponent } from './change-key.component';

const routes: Routes = [
  {

    path: '',
    children: [ {
      path: '',
      component: ChangeKeyComponent
  }]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangeKeyRoutingModule { }
