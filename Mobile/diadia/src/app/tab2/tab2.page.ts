import { Component } from '@angular/core';
import {NavController} from "@ionic/angular";
import * as HighCharts from 'highcharts';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  myChart: any;
  constructor(public nvCtrl: NavController) {}
  ionViewDidEnter() {
    var myChart = HighCharts.chart('chartContainer',{
      chart:{
        style:{
          color: 'white'
        },
        type: 'spline',
        backgroundColor: 'transparent',
      },
      title: {
        text: 'Frutas'
      },
      xAxis:{
        categories: ['Maça', 'bananas', 'laranjas']
      },
      yAxis: {
        title: {
          text: 'Fruit Eaten'
        }
      },
      series: [{
        name:'Jane',
        type: 'line',
        data: [1,0,4,10,13,15]
      },{
        name: 'Gustavo',
        type: 'line',
        data: [5,7,3,10,4,5,6]
      }]
    })
  }
}
