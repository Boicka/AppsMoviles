import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'inside-register',
    loadChildren: () => import('./pages/inside-register/inside-register.module').then( m => m.InsideRegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'outside-register',
    loadChildren: () => import('./pages/outside-register/outside-register.module').then( m => m.OutsideRegisterPageModule)
  },
  {
    path: 'panel-register',
    loadChildren: () => import('./pages/panel-register/panel-register.module').then( m => m.PanelRegisterPageModule)
  },
  {
    path: 'truck-register',
    loadChildren: () => import('./pages/truck-register/truck-register.module').then( m => m.TruckRegisterPageModule)
  },  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
