import { DatePipe } from '@angular/common';
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
  rfecha: any = '';
  hora: any = '';
  arribo: any = '';
  nGuardia: any = '';
  fGuardia: any = '';
  nOperador: any = '';
  fOperador: any = '';
  compania: any = '';
  nCamion: any = '';
  nCaja: any = '';

  pipe = new DatePipe('en-US');
  
  constructor(public modalController:ModalController) {
    
  }
    
  ngOnInit() {
    
  }

  ionViewWillEnter() {
    this.fecha = Date();
    
    GlobalConstants.rfecha = this.pipe.transform(this.fecha, 'dd/MM/yyyy');
    GlobalConstants.hora = this.pipe.transform(this.fecha, 'h:mm:ss a');
    GlobalConstants.arribo = GlobalConstants.nArribo;
    this.arribo = GlobalConstants.arribo;
    this.nGuardia = GlobalConstants.nGuardia;
    this.nOperador = GlobalConstants.nOperador;
    if (GlobalConstants.compania!='') {
      this.compania = GlobalConstants.compania
    } else {
      this.compania ="";
    }
    this.nCamion = GlobalConstants.nCamion;
    this.nCaja = GlobalConstants.nCaja;
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
    this.validar();
  }

  onChangeNO(e){
    GlobalConstants.nOperador = this.nOperador;
    this.validar();
  }

  onChangeComp(e){
    GlobalConstants.compania = e.target.value;
    this.validar();
  }

  onChangeNCam(e){
    GlobalConstants.nCamion = this.nCamion;
    this.validar();
  }

  onChangeMCaj(e){
    GlobalConstants.nCaja = this.nCaja;
    this.validar();
  }
}
