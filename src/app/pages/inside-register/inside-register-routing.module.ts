import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsideRegisterPage } from './inside-register.page';

const routes: Routes = [
  {
    path: '',
    component: InsideRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsideRegisterPageRoutingModule {}
