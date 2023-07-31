import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';
import {Tab3Page} from "../tab3/tab3.page";

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  },
  {
    path: 'tab3',
    component: Tab3Page,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
