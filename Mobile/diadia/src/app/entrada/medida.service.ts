import { Injectable } from '@angular/core';
import {Medida} from "./Medida";

@Injectable({
  providedIn: 'root'
})
export class MedidaService {
  private medida: Medida []= [];
  private diaService: string;
  private horaService: string;
  private hourClean: any;
  private dayClean: any;
  private listaMedicoes: Medida[] = [];
  constructor() {
    this.diaService = '';
    this.horaService = '';
  }
  public formatandoData():String{
    const data = new Date();
    const month = String(data.getMonth()+1).padStart(2,'0');
    const day = String(data.getDate()).padStart(2,'0');
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
    this.medida.push(valor);
    this.listaMedicoes.push(valor);
    console.log(valor)
  }
  proximaMedida():any{
    const dataAtual = new Date()
    const dataProxima = new Date(dataAtual.getTime() + 24 * 60 * 60 * 1000);
    const diaProxima = dataProxima.getDate();
    const mes = dataProxima.getMonth();
    const horaProxima = dataProxima.getHours()
    const minutesProxima = dataProxima.getMinutes();
     return `horas ${horaProxima}:${minutesProxima} dia ${diaProxima} / ${mes}`;
  }
  obterListaMedicoes(): Medida[]{
    return this.listaMedicoes;
  }
}
