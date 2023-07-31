import { Component } from '@angular/core';
import {MedidaService} from "../entrada/medida.service";
import {Medida} from "../entrada/Medida";
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public MedirForm: FormGroup;
  public medida: Medida = new  Medida()
  public indice : string;
  public hora: any;
  public dia: any;



  constructor(private Ms: MedidaService, private fb: FormBuilder) {
    this.indice = '';
    this.dia = '';
    this.hora= '';
    this.MedirForm = this.fb.group(
      {
        indice: ['', [Validators.required]],
        dia: ['', Validators.required],
        hora: ['',[Validators.required]]
      }
    )
  }
  limparCampo(): any{
    this.medida = new Medida();
  }
  setDia():void {
    this.dia = this.Ms.formatandoData()
  }
  setHora():void{
    this.hora = this.Ms.formantandoHora()
  }
  getMedida(): void{
    const dia = this.Ms.formatandoData().toString()
    const hora = this.Ms.formantandoHora().toString()
    if(this.medida.indice){
          this.Ms.submitMedidas(this.medida.indice, dia, hora);
      console.log(dia,'aqui')
    }else{
      console.log(this.medida.indice,'aqui')
    }
  }
  notificaMedida():string{
    return this.Ms.proximaMedida();
  }
}
