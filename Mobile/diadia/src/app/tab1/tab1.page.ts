import { Component } from '@angular/core';
import {MedidaService} from "../entrada/medida.service";
import {Medida} from "../entrada/Medida";


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public medida: Medida = new  Medida()
  public indice : string;
  public hora: any;
  public dia: any;


  constructor(private Ms: MedidaService) {
    this.indice = '';
    this.dia = '';
    this.hora= '';
    this.setHora();
    this.setDia();
  }
  limparCampo(): any{
    this.indice = '';
  }
  setDia():void {
    this.dia = this.Ms.formatandoData()
  }
  setHora():void{
    this.hora = this.Ms.formantandoHora()
  }
  getMedida(): void{
    if(this.medida.indice){
          console.log('digite de novo')
    }else{
      console.log(this.medida.indice,'aqui')
    }
    // this.Ms.submitMedidas(this.medida.indice, this.dia, this.hora);
  }
}
