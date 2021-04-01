import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
      path: 'home',
      loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'list',
        loadChildren: () => import('../panel-register/panel-register.module').then( m => m.PanelRegisterPageModule)
      },
      {
        path: 'exit',
        loadChildren: () => import('../login/login.module').then( m => m.LoginPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
