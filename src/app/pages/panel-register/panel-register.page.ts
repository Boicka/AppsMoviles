import { Component, OnInit } from '@angular/core';
import{ GlobalConstants } from './../..//common/global-constants';
import pdfMaker from "pdfmake/build/pdfmake";
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { ToastController } from '@ionic/angular';
pdfMaker.vfs = pdfFonts.pdfMake.vfs;
import * as XLSX from 'xlsx'; 

@Component({
  selector: 'app-panel-register',
  templateUrl: './panel-register.page.html',
  styleUrls: ['./panel-register.page.scss'],
})
export class PanelRegisterPage implements OnInit {

  /* registros = GlobalConstants.registros; */
  registros = JSON.parse(localStorage.getItem('registros'));
  pdfObj: any;
  msg = 'PDF Generado';
  fileName= 'RegistrosGPS.xlsx';
  vFecha = '';
  yes_check = localStorage.getItem('yes_check');
  no_check = localStorage.getItem('no_check');

  constructor(public toastController:ToastController) { 

  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.registros = JSON.parse(localStorage.getItem('registros'));
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

  eliminar(indice:any){
    const reg = JSON.parse(localStorage.getItem('registros'));
    reg.splice(indice,1);
    localStorage.setItem('registros',JSON.stringify(reg));
    this.ionViewWillEnter();
    /* GlobalConstants.registros = */
    /* registro.fecha = "07/07/2021",
    registro.hora = "10:30:45 AM",
    registro.noArribo = "10000",
    registro.nGuardia = "Héctor Medel",
    registro.fGuardia = "10000-fGuardia",
    registro.nOperador = "Juan Yebra",
    registro.fOperador = "10000-fOperador",
    registro.compTranspor = "Castores",
    registro.nCamion = "A1896",
    registro.nCaja = "C8463",
    registro.camarote = "Correcto",
    registro.motor = "Correcto",
    registro.defensa = "Correcto",
    registro.llantasCamion = "Correcto",
    registro.tanque = "Correcto",
    registro.qRueda = "Correcto",
    registro.llantasRemolque = "Correcto",
    registro.bolsaAire = "Correcto",
    registro.chasisChofer = "Correcto",
    registro.puertaRemolque = "Correcto",
    registro.bisagra = "Correcto",
    registro.chasisCopiloto = "Correcto",
    registro.nomEmbarque = "Productos de Piel",
    registro.paredDerecho = "Correcto",
    registro.fondo = "Correcto",
    registro.paredIzquierdo = "Correcto",
    registro.techoRemolque = "Correcto",
    registro.pisoRemolque = "Correcto",
    registro.medida = "2.30" */
  }

  async generatePDF(registro:any){
    this.presentToast();

    const firmaG = localStorage.getItem(registro.fGuardia);
    const firmaO = localStorage.getItem(registro.fOperador);
    const logo = localStorage.getItem('logoGPSSecure');
    const truck = localStorage.getItem('truck');
    

    let docDefinition = {
      pageOrientation: 'landscape',
      info: {
        title: registro.noArribo,
        author: 'GPSSecure',
        subject: 'Reporte',
        keywords: 'Reporte',
        },
      content: [
        {
          table: {
            widths: ['auto', '*'],
            body: [
              [{image: logo, width: 106, height: 50, alignment: 'left'},
              {text: 'FORMATO DE INSPECCIÓN - REGISTRO '+ registro.noArribo, style: {fontSize: 22, bold: true}, /* colSpan: 1, */ alignment: 'center'}],
            ]
          },
          layout: 'noBorders',
        },

        {
          text: '\n'
        },

        {
          columns: [
            {
              width: 400,
              layout: 'noBorders',
              table: {
                widths: ['*'],
                headerRows: 1,
                body: [
                  [{width: 227, height: 120, image: truck, alignment: 'center'}],
                ]
              }
            },
            {
              width: 40,
              text: ''
            },
            {
              width: '*',
              layout: 'noBorders',
              table: {
                widths: ['*', 'auto','auto', 'auto'],
                headerRows: 2,
                body: [
                  [{colSpan: 4, text: 'Datos de registro', alignment: 'center',  style: 'header', fillColor: '#046499'},'','',''],
                  [{style: 'contenidoR', text: 'Fecha:'}, {style: 'contenido', text: registro.fecha}, {style: 'contenidoR', text: 'Hora: '}, {style: 'contenido', text: registro.hora}],
                  [{style: 'contenidoR', text: 'Número de camión:'},{style: 'contenido', text: registro.nCamion},{style: 'contenidoR', text: 'Número de caja:'},{style: 'contenido', text: registro.nCaja}],
                  [{style: 'contenidoR', text: 'Compañia transportista:'}, {colSpan: 3, style: 'contenidoC', rowSpan: 1, text: registro.compTranspor}, {}, {}],
                ]
              }
            },
          ]
        },
        {
          text: '\n'
        },
        {
          columns: [
            {
              width: '48%',
              layout: 'noBorders',
              table: {
                widths: ['*', 'auto'],
                headerRows: 1,
                body: [
                  [{colSpan: 2, text: 'Revisión 1 parte externa (Exclusivo seguridad)', alignment: 'center',  style: 'header', fillColor: '#046499'},''],
                  [{style: 'contenido', text: '1.- Camarote'}, {image: this.imagen(registro.camarote), width: 10}],
                  [{style: 'contenido', text: '2.- Motor'}, {image: this.imagen(registro.motor), width: 10}],
                  [{style: 'contenido', text: '3.- Defensa'}, {image: this.imagen(registro.defensa), width: 10}],
                  [{style: 'contenido', text: '4.- Llantas(camión)'}, {image: this.imagen(registro.llantasCamion), width: 10}],
                  [{style: 'contenido', text: '5.- Tanque de combustible'}, {image: this.imagen(registro.tanque), width: 10}],
                  [{style: 'contenido', text: '6.- Quinta rueda'}, {image: this.imagen(registro.qRueda), width: 10}],
                  [{style: 'contenido', text: '7.- Llantas (remolque)'}, {image: this.imagen(registro.llantasRemolque), width: 10}],
                  [{style: 'contenido', text: '8.- Bolsas de aire'}, {image: this.imagen(registro.bolsaAire), width: 10}],
                  [{style: 'contenido', text: '9.- Chasis de camión lado piloto'}, {image: this.imagen(registro.chasisChofer), width: 10}],
                  [{style: 'contenido', text: '10.- Puertas del remolque'}, {image: this.imagen(registro.puertaRemolque), width: 10}],
                  [{style: 'contenido', text: '11.- Bisagras y mecanismos de apertura'}, {image: this.imagen(registro.bisagra), width: 10}],
                  [{style: 'contenido', text: '12.- Chasis camión lado copiloto'}, {image: this.imagen(registro.chasisCopiloto), width: 10}],
                ]
              }
            },
            {
              width: '*',
              text: '',
            },
            {
              width: '48%',
              layout: 'noBorders',
              table: {
                widths: ['*', 'auto'],
                headerRows: 1,
                body: [
                  [{colSpan: 2, text: 'Revisión 2 parte interna (Exclusivo embarques)', alignment: 'center',  style: 'header', fillColor: '#046499'},''],
                  [{style: 'contenido', text: 'Nombre embarque'}, {style: 'contenidoC', text: registro.nomEmbarque}],
                  [{style: 'contenido', text: '13.- Paredes laterales lado derecho del remolque'}, {image: this.imagen(registro.paredDerecho), width: 10, alignment: 'center'}],
                  [{style: 'contenido', text: '14.- Fondo'}, {image: this.imagen(registro.fondo), width: 10, alignment: 'center'}],
                  [{style: 'contenido', text: '15.- Paredes laterales lado izquierdo del remolque'}, {image: this.imagen(registro.paredIzquierdo), width: 10, alignment: 'center'}],
                  [{style: 'contenido', text: '16.- Techo remolque'}, {image: this.imagen(registro.techoRemolque), width: 10, alignment: 'center'}],
                  [{style: 'contenido', text: '17.- Piso interior del remolque'}, {image: this.imagen(registro.pisoRemolque), width: 10, alignment: 'center'}],
                  [{style: 'contenido', text: '18.- Medida'}, {style: 'contenidoC', text: registro.medida}],
                ]
              }
            },
          ]
        },
        {
          text: '\n',
        },
        {
          layout: 'noBorders',
          table:{
            widths: ['50%', '50%'],
            headerRows: 1,
              body: [
                [{image: firmaG, width:75, alignment: 'center'},{image: firmaO, width:75, alignment: 'center'}],
                [{text: "___________________________________________________", style: 'line'},{text: "___________________________________________________", style: 'line'}],
                [{text: registro.nGuardia, style: 'contenidoC'},{text: registro.nOperador, style: 'contenidoC'}],
                [{text: 'Firma Guardia', style: 'contenidoC'},{text: 'Firma Operador', style: 'contenidoC'}]
              ]
          }
        }
      ],
      styles: {
        header: {
          fontSize:12,
          bold: true,
          color: '#FFF'
        },
        contenido: {
          fontSize:10,
        },
        contenidoC: {
          fontSize:10,
          alignment: 'center'
        },
        line: {
          fontSize:4,
          bold: true,
          alignment: 'center'
        },
        contenidoR: {
          fontSize:10,
          alignment: 'rigth'
        },
        firma: {
          width:75, alignment: 'center'
        }
      },
    };

    //this.pdfObj  = pdfMaker.createPdf(docDefinition).download('hola.pdf');
    this.pdfObj = pdfMaker.createPdf(docDefinition);
    this.pdfObj.download(registro.noArribo + '.pdf');
  }

  imagen(dato: string): string{
    let image = '';
    if(dato=="Correcto"){
      image = this.yes_check;
    }else{
      image = this.no_check;
    }
    console.log(image);
    return image;
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

  exportexcel(): void 
  {
        this.vFecha = Date();
        console.log(this.vFecha);
         /* table id is passed over here */   
        let element = document.getElementById('excel-table'); 
        const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
  
         /* generate workbook and add the worksheet */
        const wb: XLSX.WorkBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Reporte de registro');
  
         /* save to file */
        XLSX.writeFile(wb, this.fileName);
        
      }

}
