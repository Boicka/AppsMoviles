import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StateComponent } from '../..//components/state/state.component';

@Component({
  selector: 'app-inside-register',
  templateUrl: './inside-register.page.html',
  styleUrls: ['./inside-register.page.scss'],
})
export class InsideRegisterPage implements OnInit {

  id: String;
  img: String;
  txt: String;

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
    return await modal.present();
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

}
