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
    GlobalConstants.registros = JSON.parse(localStorage.getItem('registros'));
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
        camarote:GlobalConstants.resp1.data,
        motor:GlobalConstants.resp2.data,
        defensa:GlobalConstants.resp3.data,
        llantasCamion:GlobalConstants.resp4.data,
        tanque:GlobalConstants.resp5.data,
        qRueda:GlobalConstants.resp6.data,
        llantasRemolque:GlobalConstants.resp7.data,
        bolsaAire:GlobalConstants.resp8.data,
        chasisChofer:GlobalConstants.resp9.data,
        puertaRemolque:GlobalConstants.resp10.data,
        bisagra:GlobalConstants.resp11.data,
        chasisCopiloto:GlobalConstants.resp12.data,
        nomEmbarque:GlobalConstants.nomEmbarque,
        paredDerecho:GlobalConstants.resp13.data,
        fondo:GlobalConstants.resp14.data,
        paredIzquierdo:GlobalConstants.resp15.data,
        techoRemolque:GlobalConstants.resp16.data,
        pisoRemolque:GlobalConstants.resp17.data,
        medida:GlobalConstants.resp18
      }
    );
    /* console.log(GlobalConstants.resp1); */
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
    /* GlobalConstants.nArribo += 1; */
    localStorage.setItem('nArribo', (parseInt(localStorage.getItem('nArribo')) + 1) + "");
    localStorage.setItem('registros',JSON.stringify(GlobalConstants.registros));
  }


}
