import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OutsideRegisterPage } from './outside-register.page';

const routes: Routes = [
  {
    path: '',
    component: OutsideRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OutsideRegisterPageRoutingModule {}
