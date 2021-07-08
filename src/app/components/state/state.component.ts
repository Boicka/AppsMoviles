import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss'],
})
export class StateComponent implements OnInit {

  respuesta: string = '';

  constructor(public modalController: ModalController) { }

  ngOnInit() { }

  closeModal() {
    this.modalController.dismiss();
  }

  onSucess(): string {
    this.respuesta = 'Correcto';
    this.modalController.dismiss(this.respuesta);
    return 'respuesta';
  }
  
  onDanger() {
    this.respuesta = 'Incorrecto';
    this.modalController.dismiss(this.respuesta);
    return 'respuesta';
  }

}
