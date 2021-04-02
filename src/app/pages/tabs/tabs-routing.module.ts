import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'panel-register',
        loadChildren: () => import('../panel-register/panel-register.module').then( m => m.PanelRegisterPageModule)
      },
      {
        path: 'truck-register',
        loadChildren: () => import('../truck-register/truck-register.module').then( m => m.TruckRegisterPageModule)
      },
      {
        path: 'truck-register',
        loadChildren: () => import('../truck-register/truck-register.module').then( m => m.TruckRegisterPageModule)
      },
      {
        path: 'outside-register',
        loadChildren: () => import('../outside-register/outside-register.module').then( m => m.OutsideRegisterPageModule)
      },
      {
        path: 'inside-register',
        loadChildren: () => import('../inside-register/inside-register.module').then( m => m.InsideRegisterPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
