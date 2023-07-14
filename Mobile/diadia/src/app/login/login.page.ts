import {Component, OnInit, ViewChild} from '@angular/core';
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild('conteudo') content: any;

  constructor(private navCtrl: NavController) { }
  entrar(){
    this.navCtrl.navigateForward('tabs')
  }
  ngOnInit() {
  }

}
