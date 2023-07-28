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
    this.setHora();
    this.setDia();
    this.MedirForm = this.fb.group(
      {
        indice: ['', [Validators.required]],
        dia: [this.dia, Validators.required],
        hora: [this.hora,[Validators.required]]
      }
    )
  }
  limparCampo(): any{
    this.MedirForm.setValue({
      indice: '',
      dia: this.dia,
      hora: this.hora,
    })
  }
  setDia():void {
    this.dia = this.Ms.formatandoData()
  }
  setHora():void{
    this.hora = this.Ms.formantandoHora()
  }
  getMedida(): void{
    if(this.medida.indice){
          this.Ms.submitMedidas(this.medida.indice, this.dia, this.hora);
    }else{
      console.log(this.medida.indice,'aqui')
    }
  }
  notificaMedida():string{
    return this.Ms.proximaMedida();
  }
}
