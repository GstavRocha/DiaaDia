import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';
import {Tab1Page} from "../tab1/tab1.page";
import {Tab2Page} from "../tab2/tab2.page";

const routes: Routes = [
  {
    path: '',
    component: MenuPage
  },
  {
    path: 'tab1',
    component: Tab1Page,
  },
  {
    path: 'tab2',
    component: Tab2Page,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
