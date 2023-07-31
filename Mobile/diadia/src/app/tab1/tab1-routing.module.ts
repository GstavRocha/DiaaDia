import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import {Tab2Page} from "../tab2/tab2.page";
import {Tab5Page} from "../tab5/tab5.page";

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'tab2',
    component: Tab2Page
  },
  {
    path: 'tab5',
    component: Tab5Page
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
