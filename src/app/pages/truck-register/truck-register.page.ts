import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SignPage } from '../sign/sign.page';

@Component({
  selector: 'app-truck-register',
  templateUrl: './truck-register.page.html',
  styleUrls: ['./truck-register.page.scss'],
})
export class TruckRegisterPage implements OnInit {

  constructor(public modalController:ModalController) { }

  ngOnInit() {
  }

  async openModalSign(titleModal){
    const modal = await this.modalController.create({
      component: SignPage,
      /* cssClass: 'my-custom-class' */
      componentProps: {
        'titulo': titleModal
      }
    });
    return await modal.present();
  }

}
