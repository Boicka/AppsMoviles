import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SignPage } from '../sign/sign.page';
import{ GlobalConstants } from './../..//common/global-constants';

@Component({
  selector: 'app-truck-register',
  templateUrl: './truck-register.page.html',
  styleUrls: ['./truck-register.page.scss'],
})
export class TruckRegisterPage implements OnInit {

  fecha: any;
  status:boolean=true;
  rfecha: any = '12';
  hora: any = '21';
  arribo: any = '12';
  nGuardia: any = 'asd';
  fGuardia: any = 'xd';
  nOperador: any = 'asd';
  fOperador: any = 'xd';
  compania: any = 'sad';
  nCamion: any = 'as';
  nCaja: any = 'asd';
  constructor(public modalController:ModalController) {
    this.fecha = Date();
  }
    
  ngOnInit() {
  }

  ngOnDestroy(){
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

  validar(){
    if(GlobalConstants.rfecha != '' &&
    GlobalConstants.hora != '' &&
    GlobalConstants.arribo != '' &&
    GlobalConstants.nGuardia != '' &&
    GlobalConstants.fGuardia != '' &&
    GlobalConstants.nOperador != '' &&
    GlobalConstants.fOperador != '' &&
    GlobalConstants.compania != '' &&
    GlobalConstants.nCamion != '' &&
    GlobalConstants.nCaja != ''){
         this.status = false;
         GlobalConstants.statusTruck = true;
    }
  }

  onChangeNG(e){
    GlobalConstants.nGuardia = this.nGuardia;
  }

  onChangeNO(e){
    GlobalConstants.nOperador = this.nOperador;
  }

  onChangeNCam(e){
    GlobalConstants.nCamion = this.nCamion;
  }

  onChangeMCaj(e){
    GlobalConstants.nCaja = this.nCaja;
    GlobalConstants.rfecha = 'xd';
    GlobalConstants.hora = 'xd';
    GlobalConstants.arribo = 'xd';
    GlobalConstants.nGuardia = 'xd';
    GlobalConstants.fGuardia = 'xd';
    GlobalConstants.nOperador = 'xd';
    GlobalConstants.fOperador = 'xd';
    GlobalConstants.compania = 'xd';
    GlobalConstants.nCamion = 'xd';
    GlobalConstants.nCaja = 'xd';
    this.validar();
  }
}
