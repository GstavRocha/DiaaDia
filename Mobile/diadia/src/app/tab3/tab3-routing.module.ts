import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab3Page } from './tab3.page';
import {Tab4Page} from "../tab4/tab4.page";

const routes: Routes = [
  {
    path: '',
    component: Tab3Page,
  },
  {
    path: 'tab4',
    component: Tab4Page,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3PageRoutingModule {}
