import {Component, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";
import * as HighCharts from 'highcharts';
import darkUnica from 'highcharts/themes/dark-unica';
import {MedidaService} from "../entrada/medida.service";
import {Medida} from "../entrada/Medida";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  public medidas: Medida []=[];
  public myChart: any;
  public indiceGlicemico: any;
  public indiceDia: any;
  public indiceHora: any;
  public listaMedicoes:any = []
  constructor(public nvCtrl: NavController, private Md: MedidaService) {}

  ngOnInit() {
    this.medidas = this.Md.obterListaMedicoes()
    this.indiceGlicemico = this.medidas.map((medicao)=> parseInt(medicao.indice));
    this.indiceDia = this.medidas.map((medicao)=> medicao.dia);
    console.log( this.indiceGlicemico,'indice glicemico')
    console.log(this.listaMedicoes, 'verifica listamedicoes')
    darkUnica(HighCharts)
   this.myChart=  HighCharts.chart('chartContainer',{
      chart: {
        type: 'column'
      },

      title:{
        text: 'Indices Glicêmicos da Semana'
      },
      xAxis:{
        categories: this.indiceDia
      },
      yAxis:{
        min:0,
        title: {
          text: 'Glicose'
        }
      },
     plotOptions:{
        area: {
          threshold: 100
        }
     },
      tooltip:{
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)',
        shared: true
      },
     series: [{
       name: 'Jão Jan',
       type: 'column',
       data: this.indiceGlicemico,
       dataLabels: {
         enabled: true,
         style: {
           fontSize: '14px'
         },
         format: '{point.y}',
         verticalAlign: 'bottom'
       }
     }]
    })
  };
}

