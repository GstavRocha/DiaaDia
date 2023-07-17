import {Component, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";
import * as HighCharts from 'highcharts';
import darkUnica from 'highcharts/themes/dark-unica';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  myChart: any;
  constructor(public nvCtrl: NavController) {}

  ngOnInit() {
    darkUnica(HighCharts)
   this.myChart=  HighCharts.chart('chartContainer',{
      chart: {
        type: 'column'
      },
      title:{
        text: 'Indices Glicêmicos da Semana'
      },
      xAxis:{
        categories:[ 'Segunda-Feira 26/06', 'Terça-Feira 27/06', 'Quarta-Feira 28/06', 'Quinta-Feira 29/06', 'Sexta-Feira 30/06', 'Sábado 01/07', 'Domingo 02/07' ]
      },
      yAxis:{
        min:0,
        max: 150,
        title: {
          text: 'Glicose'
        }
      },
      tooltip:{
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)',
        shared: true
      },
      plotOptions:{
        column: {
          stacking: 'percent'
        }
      },
      series: [{
        name: 'Glicose Alta',
        type: 'column',
        data: [100,150,110,98,99,110,150]
      },{
        name: 'Glicose Elevada',
        type: 'column',
        data: [110,115,130,134,114,116,125]
      },{
        name: 'Glicose Controlada',
        type: 'column',
        data: [100,100,100,99,98, 97, 99]
      }]
    })
    };
  }

