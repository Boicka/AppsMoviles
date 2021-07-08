import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario = {
    user: '',
    pass: ''
  };

  mensaje = '';

  constructor(public toastController: ToastController, public router: Router) { }

  ngOnInit() {
  }

  login(){
    if (this.usuario.user == "" || this.usuario.pass == "") {
      this.mensaje = "Faltan datos por llenar";
      this.presentToast();
    } else if(this.usuario.user == "Guardia1" && this.usuario.pass == "123456" ||
              this.usuario.user == "Guardia2" && this.usuario.pass == "654321") {
      this.router.navigateByUrl('/');
    } else {
      this.mensaje = "Credenciales invalidas";
      this.presentToast();
    }
  }

  async presentToast() {
    
    const toast = await this.toastController.create({
      message: this.mensaje,
      duration: 2000
    });
    toast.present();
  }


  

}
