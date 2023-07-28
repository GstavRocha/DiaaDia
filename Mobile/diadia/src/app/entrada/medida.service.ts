import { Injectable } from '@angular/core';
import {Medida} from "./Medida";
import {formatDate} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class MedidaService {
  private medida: Medida []= [];
  // private medidasLista: any [];
  private diaService: string;
  // private alertaService: string;
  private horaService: string;
  constructor() {
    // this.medidasLista = [];
    this.diaService = '';
    // this.alertaService= '';
    this.horaService = '';
  }
  public formatandoData():String{
    const data = new Date();
    const month = String(data.getMonth()+1).padStart(2,'0');
    const day = String(data.getDate()+1).padStart(2,'0');
    return  this.diaService = `${day}/${month}`;
  }

  public formantandoHora(): String{
    const time = new Date;
    const hora = time.getHours()
    const minutes = String(time.getMinutes()).padStart(2,'0');
    const ampm = hora >= 12? 'PM': 'AM';
    const hora12 = hora % 12 || 12;
    return  this.horaService =`${hora12}:${minutes} ${ampm}`;
  }
  submitMedidas(indice: string, dia: string, hora: string): void{
    const valor: Medida = {indice , dia, hora}
    console.log(valor)
  }
}
