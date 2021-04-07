import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss'],
})
export class StateComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  closeModal(){
    this.modalController.dismiss();
 }
 
}
