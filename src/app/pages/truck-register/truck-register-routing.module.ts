import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TruckRegisterPage } from './truck-register.page';

const routes: Routes = [
  {
    path: '',
    component: TruckRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TruckRegisterPageRoutingModule {}
