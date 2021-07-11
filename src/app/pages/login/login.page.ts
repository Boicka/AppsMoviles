import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { GlobalConstants } from '../../common/global-constants';


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
    /* const logo = this.toBase64('/src/assets/img/yes_check.png');
    const yes_check = this.toBase64('/src/assets/img/yes_check.png');
    const no_check = this.toBase64('/src/assets/img/yes_check.png');
    localStorage.setItem('logoGPSSecure',logo);
    localStorage.setItem('yes_check', yes_check);
    localStorage.setItem('no_check', no_check);
    localStorage.setItem('truck',this.toBase64('ruta')); */
    /* localStorage.setItem('registros',JSON.stringify(GlobalConstants.registros)); */
    /* localStorage.setItem('nArribo', '10002'); */
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
