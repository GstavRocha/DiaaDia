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
  ionViewDidLoad(){
    this.myChart = HighCharts.chart('container',{
      chart:{
        type: 'bar'
      },
      title:{
        text: 'test'
      },
      xAxis:{
        // https://www.highcharts.com/blog/tutorials/setting-chart-ionic-app-using-highcharts/
      }
    })
  }

}
