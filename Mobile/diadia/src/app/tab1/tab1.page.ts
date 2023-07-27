import { Component } from '@angular/core';
import {MedidaService} from "../entrada/medida.service";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private Ms: MedidaService) {
    this.Ms.formatandoData();
    this.Ms.formantandoHora();
  }

}
