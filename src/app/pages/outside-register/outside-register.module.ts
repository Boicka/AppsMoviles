import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OutsideRegisterPageRoutingModule } from './outside-register-routing.module';

import { OutsideRegisterPage } from './outside-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OutsideRegisterPageRoutingModule
  ],
  declarations: [OutsideRegisterPage]
})
export class OutsideRegisterPageModule {}
