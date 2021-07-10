import { Component, OnInit } from '@angular/core';
import{ GlobalConstants } from './../..//common/global-constants';
import pdfMaker from "pdfmake/build/pdfmake";
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { ToastController } from '@ionic/angular';
pdfMaker.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-panel-register',
  templateUrl: './panel-register.page.html',
  styleUrls: ['./panel-register.page.scss'],
})
export class PanelRegisterPage implements OnInit {

  registros = GlobalConstants.registros;
  pdfObj: any;
  msg = 'PDF Generado tu mama no te quiere';


  constructor(public toastController:ToastController) { 

  }

  ngOnInit() {
  }

  buscar(e){
    
  }

  async presentToast() {
    
    const toast = await this.toastController.create({
      message: this.msg,
      duration: 2000
    });
    toast.present();
  }

  async generatePDF(registro:any){
    this.presentToast();

    let docDefinition = {
      info: {
        title: registro.noArribo,
        author: 'apk',
        subject: 'Reporte',
        keywords: 'Reporte',
        },
      content: [
        {
          style: 'tableExample',
          table: {
            widths: ['*', 'auto'],
            //headerRows: 1,
            //alignment: 'center',
            body: [
              [{text: 'INSPECCION DE COMPARTIMIENTOS OCULTOS', style: 'tableHeader', colSpan: 1, alignment: 'center'}, {image: await this.getBase64ImageFromURL("https://i.postimg.cc/7b83sm1h/Sin-t-tulo-1.png"), width: 131, height: 75}],
            ]
          },
          layout: 'noBorders'
        },

        {
          text: '\n\n\n'
        },

        {
          style: '',
          color: '#444',
          table: {
            widths: ['auto', 'auto','auto', 'auto'],
            headerRows: 2,
            // keepWithHeaderRows: 1,
            body: [
              ['Fecha: ', registro.fecha, 'Hora: ', registro.hora],
              ['Nombre guardia: ', registro.nGuardia, 'Firma', 'data'],
              ['Nombre operador', registro.nOperador, 'Firma', 'data'],
              ['Compañia transportista', {colSpan: 3, rowSpan: 1, text: registro.compTranspor}, {}, {}],
              ['Número de camión', registro.nCamion, 'Número de caja: ', registro.nCaja],
              
            ]
          }
        },

        {
          text: '\n\n\n'
        },

        {
          style: 'tableExample',
          color: '#444',
          table: {
            widths: ['auto', 'auto'],
            headerRows: 2,
            // keepWithHeaderRows: 1,
            body: [
              [{text: 'Revisión 1 parte externa (Exclusivo seguridad) ', style: 'tableHeader', colSpan: 2, alignment: 'center'}, {}],
              ['1.- Camarote', registro.camarote],
              ['2.- Motor', registro.motor],
              ['3.- Defensa', registro.defensa],
              ['4.- Llantas(camión)', registro.llantasCamion],
              ['5.- Tanque de combustible', registro.tanque],
              ['6.- Quinta rueda', registro.qRueda],
              ['7.- Llantas (remolque)', registro.llantasRemolque],
              ['8.- Bolsas de aire', registro.bolsaAire],
              ['9.- Chasis de camión lado piloto', registro.chasisChofer],
              ['10.- Puertas del remolque', registro.puertaRemolque],
              ['11.- Bisagras y mecanismos de apertura', registro.bisagra],
              ['12.- Chasis camión lado copiloto', registro.chasisCopiloto],
            ]
          }
        },

        {
          text: '\n\n\n'
        },

        {image: await this.getBase64ImageFromURL("https://i.postimg.cc/RZm8qRrv/img.jpg"), width: 433, height: 261, alignment: 'center'},

        {
          text: '\n\n\n'
        },

        {
          style: 'tableExample',
          color: '#444',
          table: {
            widths: ['auto', 'auto'],
            headerRows: 2,
            // keepWithHeaderRows: 1,
            body: [
              [{text: 'Revisión 2 parte interna (Exclusivo embarques) ', style: 'tableHeader', colSpan: 2, alignment: 'center'}, {}],
              ['Nombre embarque', registro.nomEmbarque],
              ['13.- Paredes laterales lado derecho del remolque', registro.paredDerecho],
              ['14.- Fondo', registro.fondo],
              ['15.- Paredes laterales lado izquierdo del remolque', registro.paredIzquierdo],
              ['16.- Techo remolque', registro.techoRemolque],
              ['17.- Piso interior del remolque', registro.pisoRemolque],
              ['18.- Medida', registro.medida],
            ]
          }
        },
      ]
    };

    //this.pdfObj  = pdfMaker.createPdf(docDefinition).download('hola.pdf');
    this.pdfObj = pdfMaker.createPdf(docDefinition);
    this.pdfObj.download(registro.noArribo + '.pdf');
  }

  getBase64ImageFromURL(url) {
    return new Promise((resolve, reject) => {
      var img = new Image();
      img.setAttribute("crossOrigin", "anonymous");

      img.onload = () => {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;

        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);

        var dataURL = canvas.toDataURL("image/png");

        resolve(dataURL);
      };

      img.onerror = error => {
        reject(error);
      };

      img.src = url;
    });
  }

}
