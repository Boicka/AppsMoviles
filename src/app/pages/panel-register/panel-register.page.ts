import { Component, OnInit } from '@angular/core';
import{ GlobalConstants } from './../..//common/global-constants';

@Component({
  selector: 'app-panel-register',
  templateUrl: './panel-register.page.html',
  styleUrls: ['./panel-register.page.scss'],
})
export class PanelRegisterPage implements OnInit {

  registros = GlobalConstants.registros;

  constructor() { }

  ngOnInit() {
  }

  buscar(e){
    
  }

}
