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
        fecha: GlobalConstants.rfecha,
        hora: GlobalConstants.hora,
        noArribo: GlobalConstants.arribo,
        nGuardia: GlobalConstants.nGuardia,
        fGuardia:GlobalConstants.fGuardia,
        nOperador:GlobalConstants.nOperador,
        fOperador:GlobalConstants.fOperador,
        compTranspor:GlobalConstants.compania,
        nCamion:GlobalConstants.nCamion,
        nCaja:GlobalConstants.nCaja,
        camarote:GlobalConstants.resp1,
        motor:GlobalConstants.resp2,
        defensa:GlobalConstants.resp3,
        llantasCamion:GlobalConstants.resp4,
        tanque:GlobalConstants.resp5,
        qRueda:GlobalConstants.resp6,
        llantasRemolque:GlobalConstants.resp7,
        bolsaAire:GlobalConstants.resp8,
        chasisChofer:GlobalConstants.resp9,
        puertaRemolque:GlobalConstants.resp10,
        bisagra:GlobalConstants.resp11,
        chasisCopiloto:GlobalConstants.resp12,
        nomEmbarque:GlobalConstants.nomEmbarque,
        paredDerecho:GlobalConstants.resp13,
        fondo:GlobalConstants.resp14,
        paredIzquierdo:GlobalConstants.resp15,
        techoRemolque:GlobalConstants.resp16,
        pisoRemolque:GlobalConstants.resp17,
        medida:GlobalConstants.resp18
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
    GlobalConstants.nomEmbarque= '';
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
    GlobalConstants.nArribo += 1;
  }


}
