import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OutsideRegisterPageRoutingModule } from './outside-register-routing.module';

import { OutsideRegisterPage } from './outside-register.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OutsideRegisterPageRoutingModule,
    ComponentsModule
  ],
  declarations: [OutsideRegisterPage]
})
export class OutsideRegisterPageModule {}
