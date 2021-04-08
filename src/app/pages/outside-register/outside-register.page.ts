import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StateComponent } from '../../components/state/state.component';

@Component({
  selector: 'app-outside-register',
  templateUrl: './outside-register.page.html',
  styleUrls: ['./outside-register.page.scss'],
})
export class OutsideRegisterPage implements OnInit {

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
        'tx': this.txt
      }
    });
    return await modal.present();
  }

  datos: { id: string, img: string, texto: string }[] = [
    {
      id: '1',
      img: '/assets/img/camion1.png',
      texto: 'El camarote debe contar con extinguidor. El camarote debe contar con ventilación suficiente.El copete debe estar cubierto de manera correcta. *Si cumple con los requisitos anteriores marcar en la opción "correcto".*'
    },
    {
      id: '2',
      img: '/assets/img/camion2.png',
      texto: 'Los Indicadores de check engine no deben estar encendidos. *Si cumple con los requisitos anteriores marcar en la opción "correcto".*'
    },
    {
      id: '3',
      img: '/assets/img/camion3.png',
      texto: 'La defensa debe estar bien sujetada a los Brackets. *Si cumple con los requisitos anteriores marcar en la opción "correcto".*'
    },
    {
      id: '4',
      img: '/assets/img/camion4.png',
      texto: ' Las llantas no presentan desgaste a simple vista Las llantas deben estar infladas en las libras indicadas. *Si cumple con los requisitos anteriores marcar en la opción "correcto".*'

    },
    {
      id: '5',
      img: '/assets/img/camion5.png',
      texto: 'El tanque no debe presentar modificaciones que permitan sacar DIESEL del tanque El tanque no debe tener daños o perforaciones. *Si cumple con los requisitos anteriores marcar en la opción "correcto".*'
    },
    {
      id: '6',
      img: '/assets/img/camion6.png',
      texto: 'Quinta rueda bien lubricada y libre de suciedad. *Si cumple con los requisitos anteriores marcar en la opción "correcto".*'
    },
    {
      id: '7',
      img: '/assets/img/camion7.png',
      texto: 'La llanta no presenta desgaste. Llantas infladas en las libras indicadas. *Si cumple con los requisitos anteriores marcar en la opción "correcto".*'
    },
    {
      id: '8',
      img: '/assets/img/camion8.png',
      texto: 'El funcionamiento de las bolsas es correcto Se elevan de ambos lados. *Si cumple con los requisitos anteriores marcar en la opción "correcto".* '
    },
    {
      id: '9',
      img: '/assets/img/camion9.png',
      texto: 'Chasis libre de objetos ajenos a la unidad. *Si cumple con los requisitos anteriores marcar en la opción "correcto".*'
    },
    {
      id: '10',
      img: '/assets/img/camion10.png',
      texto: 'Las puertas deben aperturar de forma correcta. Seguros funcionan correctamente en ambos lados. *Si cumple con los requisitos anteriores marcar en la opción "correcto".*'
    },
    {
      id: '11',
      img: '/assets/img/camion11.png',
      texto: 'Las puertas deben aperturar de forma correcta. Seguros funcionan correctamente en ambos lados. Bisagras y mecanismos correctamente lubricados. *Si cumple con los requisitos anteriores marcar en la opción "correcto".*'
    },
    {
      id: '12',
      img: '/assets/img/camion12.png',
      texto: 'Chasis libre de objetos ajenos a la unidad. *Si cumple con los requisitos anteriores marcar en la opción "correcto".*'
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
