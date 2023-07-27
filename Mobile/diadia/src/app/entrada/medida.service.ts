import { Injectable } from '@angular/core';
import {Medida} from "./medida";
import {formatDate} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class MedidaService {
  private medida: {indice: Medida, dia: Medida, data: Medida, alerta: Medida} [] = [];
  private medidasLista: any [];
  private indiceService: number;
  private diaService: string;
  private alertaService: string;
  private horaService: string;
  constructor() {
    this.medidasLista = [];
    this.indiceService = 0;
    this.diaService = '';
    this.alertaService= '';
    this.horaService = '';
  }
  // submitMedida(indice: Medida){
  //   this.medida.push(indice: indice, dia: new Medida())
  // }
  public formatandoData(): void{
    const data = new Date();
    const month = String(data.getMonth()+1).padStart(2,'0');
    const day = String(data.getDate()+1).padStart(2,'0');
    this.diaService = `${day}/${month}`;
  }

  public formantandoHora(): void{
    const time = new Date;
    const hora = time.getHours()
    const minutes = String(time.getMinutes()).padStart(2,'0');
    const ampm = hora >= 12? 'PM': 'AM';
    const hora12 = hora % 12 || 12;
    this.horaService =`${hora12}:${minutes} ${ampm}`;
  }
}
