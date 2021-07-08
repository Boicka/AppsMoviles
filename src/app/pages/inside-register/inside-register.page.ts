import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StateComponent } from '../..//components/state/state.component';
import{ GlobalConstants } from './../..//common/global-constants';

@Component({
  selector: 'app-inside-register',
  templateUrl: './inside-register.page.html',
  styleUrls: ['./inside-register.page.scss'],
})
export class InsideRegisterPage implements OnInit {

  id: String;
  img: String;
  txt: String;
  embarque: string;
  medida: string;
  status:boolean=true;
  resp: any;
  resp12: any = '';
  resp13: any = '';
  resp14: any = '';
  resp15: any = '';
  resp16: any = '';
  resp17: any = '';
  resp18: any = '';
  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async openModalState(titleModal, number) {
    this.buscar(number);
    const modal = await this.modalController.create({
      component: StateComponent,
      /* cssClass: 'my-custom-class' */
      componentProps: {
        'titulo': titleModal,
        'numero': this.id,
        'img': this.img,
        'txt': this.txt
      }
    });
    await modal.present();
    this.resp = await modal.onDidDismiss();
    switch (number) {
      case '13':
        GlobalConstants.resp13 = this.resp;
        this.resp13 = this.resp;
        break;
      case '14':
        GlobalConstants.resp14 = this.resp;
        this.resp14 = this.resp;
        break;
      case '15':
        GlobalConstants.resp15 = this.resp;
        this.resp15 = this.resp;
        break;
      case '16':
        GlobalConstants.resp16 = this.resp;
        this.resp16 = this.resp;
        break;
      case '17':
        GlobalConstants.resp17 = this.resp;
        this.resp17 = this.resp;
        break;
      default:
        break;
    }
    this.validar();
  }
  datos: { id: string, img: string, texto: string }[] = [
    {
      id: '13',
      img: '/assets/img/camion13.png',
      texto: 'Liner panel adherido correctamente. No debe presentar rastros de hongos o humedad en los paneles. * Si cumple con los requisitos anteriores marcar en la opción "correcto".*'
    },
    {
      id: '14',
      img: '/assets/img/camion14.png',
      texto: 'Liner panel adherido correctamente. No debe presentar rastros de hongos o humedad en los paneles. *Si cumple con los requisitos anteriores marcar en la opción "correcto".*'
    },
    {
      id: '15',
      img: '/assets/img/camion15.png',
      texto: 'Liner panel adherido correctamente. No debe presentar rastros de hongos o humedad en los paneles. * Si cumple con los requisitos anteriores marcar en la opción "correcto".*'
    },
    {
      id: '16',
      img: '/assets/img/camion16.png',
      texto: 'Liner panel adherido correctamente. No debe presentar rastros de hongos o humedad en los paneles. * Si cumple con los requisitos anteriores marcar en la opción "correcto".*'
    },
    {
      id: '17',
      img: '/assets/img/camion17.png',
      texto: 'La duela debe estar en buen estado y no presenta zonas de piso faltante. El piso interior debe estar limpio de residuos.* Si cumple con los requisitos anteriores marcar en la opción "correcto".*'
    },
  ];

  buscar(id) {
    this.datos.forEach(data => {
      if (data.id === id) {
        this.id = data.id;
        this.img = data.img;
        this.txt = data.texto;
      }
    });
  };

  validar(){
    if(GlobalConstants.resp12 != '' &&
    GlobalConstants.resp13 != '' &&
    GlobalConstants.resp14 != '' &&
    GlobalConstants.resp15 != '' &&
    GlobalConstants.resp16 != '' &&
    GlobalConstants.resp17 != '' &&
    GlobalConstants.resp18 != ''){
         this.status = false;
         GlobalConstants.statusIn = true;
    }
  }

  onChangeE(e){
    GlobalConstants.resp12 = this.embarque;
  }

  onChangeM(e){
    GlobalConstants.resp18 = this.medida;
  }
}