import { Component, OnInit } from '@angular/core';

import{ GlobalConstants } from './../..//common/global-constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  statusTruck: boolean = false;
  statusOut: boolean = false;
  statusIn: boolean = false;
  statusG: boolean = true;
  
  constructor() { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.statusTruck = GlobalConstants.statusTruck;
    this.statusOut = GlobalConstants.statusOut;
    this.statusIn = GlobalConstants.statusIn;
    
    if(this.statusIn && this.statusOut && this.statusTruck){
      GlobalConstants.statusG = false;
      this.statusG = GlobalConstants.statusG;
    }else{
      this.statusG = GlobalConstants.statusG;
    }
  }

  addRegister(){
    GlobalConstants.registros.push(
      {
        fecha: "08/07/2021",
        hora: "10:30",
        noArribo: "10002",
        fGuardia: "XD",
        fOperador: "XD",
        compTranspor: "Castores",
        nCamion: "XD",
        nCaja: "XD",
        camarote: "XD",
        motor: "XD",
        defensa: "XD",
        llantasCamion: "XD",
        tanque: "XD",
        qRueda: "XD",
        llantasRemolque: "XD",
        bolsaAire: "XD",
        chasisChofer: "XD",
        puertaRemolque: "XD",
        bisagra: "XD",
        chasisCopiloto: "XD",
        nomEmbarque: "XD",
        paredDerecho: "XD",
        fondo: "XD",
        paredIzquierdo: "XD",
        techoRemolque: "XD",
        pisoRemolque: "XD",
        medida: "XD"
      }
    );
    GlobalConstants.rfecha= '';
    GlobalConstants.hora= '';
    GlobalConstants.arribo= '';
    GlobalConstants.nGuardia= '';
    GlobalConstants.fGuardia= '';
    GlobalConstants.nOperador= '';
    GlobalConstants.fOperador= '';
    GlobalConstants.compania= '';
    GlobalConstants.nCamion= '';
    GlobalConstants.nCaja= '';
    GlobalConstants.resp1= '';
    GlobalConstants.resp2= '';
    GlobalConstants.resp3= '';
    GlobalConstants.resp4= '';
    GlobalConstants.resp5= '';
    GlobalConstants.resp6= '';
    GlobalConstants.resp7= '';
    GlobalConstants.resp8= '';
    GlobalConstants.resp9= '';
    GlobalConstants.resp10= '';
    GlobalConstants.resp11= '';
    GlobalConstants.resp12= '';
    GlobalConstants.resp13= '';
    GlobalConstants.resp14= '';
    GlobalConstants.resp15= '';
    GlobalConstants.resp16= '';
    GlobalConstants.resp17= '';
    GlobalConstants.resp18= '';
    GlobalConstants.statusTruck=false;
    GlobalConstants.statusIn=false;
    GlobalConstants.statusOut=false;
    GlobalConstants.statusG=true;
  }


}
