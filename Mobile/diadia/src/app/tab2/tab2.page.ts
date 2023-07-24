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
       data: [100, 150, 110, 98, 99, 110, 150],
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

