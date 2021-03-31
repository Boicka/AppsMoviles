import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PanelRegisterPageRoutingModule } from './panel-register-routing.module';

import { PanelRegisterPage } from './panel-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PanelRegisterPageRoutingModule
  ],
  declarations: [PanelRegisterPage]
})
export class PanelRegisterPageModule {}
