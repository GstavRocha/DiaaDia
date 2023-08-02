import { Component, OnInit } from '@angular/core';
import {MapService} from "../map/map.service";
import {Mapa} from "../map/Map";


@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  public items : Mapa [] = []
  public resultado !: string;
  constructor(private Mapa: MapService) { }

  ngOnInit() {
    this.items = this.Mapa.Map;
   this.Mapa.input;
  }
  async getBuscaPrecisa(){
    try{
      this.items = await this.Mapa.Map
    }catch (error){

    }
  }
  clickLinha(linha: any){
    this.resultado = linha
  }

}
