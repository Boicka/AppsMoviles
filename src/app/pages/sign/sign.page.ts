import { Component, OnInit, ViewChild, HostListener, ElementRef, AfterViewInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import SignaturePad from 'signature_pad';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';
import { GlobalConstants } from '../../common/global-constants';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.page.html',
  styleUrls: ['./sign.page.scss'],
})
export class SignPage implements OnInit, AfterViewInit {

  @ViewChild('canvas', { static: true }) signaturePadElement;
  signaturePad: any;
  canvasWidth: number;
  canvasHeight: number;
  titulo: any;
  

  constructor(public modalController: ModalController,
              private elementRef: ElementRef,
              private base64ToGallery: Base64ToGallery) {
                setTimeout(()=>{
                  this.signaturePad = new SignaturePad(this.signaturePadElement.nativeElement);
                },1000);
               }

  ngOnInit(): void {
    this.init();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.init();
  }

  init() {
    const canvas: any = this.elementRef.nativeElement.querySelector('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 440;
    if (this.signaturePad) {
      this.signaturePad.clear(); // Clear the pad on init
    }
  }

  public ngAfterViewInit(): void {
    this.signaturePad = new SignaturePad(this.signaturePadElement.nativeElement);
    this.signaturePad.clear();
    this.signaturePad.penColor = '#000000';
  }

  save(): void {
    const img = this.signaturePad.toDataURL();
    localStorage.setItem(localStorage.getItem('nArribo') + "-f"+this.titulo, img);
    if (this.titulo == "Guardia") {
      GlobalConstants.fGuardia = localStorage.getItem('nArribo') + "-f"+this.titulo;
    } else {
      GlobalConstants.fOperador = localStorage.getItem('nArribo') + "-f"+this.titulo;
    }
    this.modalController.dismiss();
    /* var dataImage = localStorage.getItem('10001-fOperador');
    var bannerImg = document.querySelector('#firma');
    bannerImg.setAttribute('src',dataImage); */

    /* this.base64ToGallery.base64ToGallery(img).then(
      res => console.log('Saved image to gallery ', res),
      err => console.log('Error saving image to gallery ', err)
    ); */
  }

  isCanvasBlank(): boolean {
    if (this.signaturePad) {
      return this.signaturePad.isEmpty() ? true : false;
    }
  }

  clear() {
    this.signaturePad.clear();
  }

  undo() {
    const data = this.signaturePad.toData();
    if (data) {
      data.pop(); // remove the last dot or line
      this.signaturePad.fromData(data);
    }
  }

  closeModal() {
    this.modalController.dismiss();
  }
  
}
