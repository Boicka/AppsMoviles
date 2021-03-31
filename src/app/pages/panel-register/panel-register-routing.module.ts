import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PanelRegisterPage } from './panel-register.page';

const routes: Routes = [
  {
    path: '',
    component: PanelRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanelRegisterPageRoutingModule {}
