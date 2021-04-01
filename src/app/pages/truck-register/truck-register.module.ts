import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TruckRegisterPageRoutingModule } from './truck-register-routing.module';

import { TruckRegisterPage } from './truck-register.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TruckRegisterPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TruckRegisterPage]
})
export class TruckRegisterPageModule {}
