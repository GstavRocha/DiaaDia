import {Component} from '@angular/core';
import {LoginFake} from '../Auth/LoginFake';
import {AuthService} from "../Auth/auth.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AlertController, NavController} from "@ionic/angular";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage{
  public usuario: LoginFake = new LoginFake();
  public loginForm: FormGroup;
  public showError: boolean= false;


  constructor(private auth: AuthService, private  fb: FormBuilder, private navCtrl: NavController, private alert: AlertController) {
    this.loginForm = this.fb.group({
      username:['',Validators.required],
      password:['', Validators.required]
    })
  }
  async alertaBox(){
    const alert:HTMLIonAlertElement = await this.alert.create(
      {
        header: 'Alerta',
        subHeader: 'Erro de Login',
        message: 'Inisra uma senha ou login válidos',
        buttons: ['ok'],
      }
    );
    await alert.present()
  }
  onSubmit(): void{
    const verificar:boolean = (this.auth.login(this.usuario.username, this.usuario.password));
    console.log('Tentativa de login com as seguintes credenciais:');
    console.log('Username:', this.usuario.username);
    console.log('Password:', this.usuario.password);
    if (verificar){
      console.log(verificar, "logica da condição")
      this.navCtrl.navigateForward("/tab1");
    }else{
      console.log(verificar, "logica da condição")
      this.showError = true;
      this.alertaBox()
    }
  }
}
