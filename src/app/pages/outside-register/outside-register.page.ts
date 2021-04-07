import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StateComponent } from '../../components/state/state.component';

@Component({
  selector: 'app-outside-register',
  templateUrl: './outside-register.page.html',
  styleUrls: ['./outside-register.page.scss'],
})
export class OutsideRegisterPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async openModalState(titleModal, number){
    const modal = await this.modalController.create({
      component: StateComponent,
      /* cssClass: 'my-custom-class' */
      componentProps: {
        'titulo': titleModal,
        'numero': number
      }
    });
    return await modal.present();
  }

}
