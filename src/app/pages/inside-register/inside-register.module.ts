import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsideRegisterPageRoutingModule } from './inside-register-routing.module';

import { InsideRegisterPage } from './inside-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsideRegisterPageRoutingModule
  ],
  declarations: [InsideRegisterPage]
})
export class InsideRegisterPageModule {}
