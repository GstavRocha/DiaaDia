import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './login.page';
import {TabsPage} from "../tabs/tabs.page";
import {Tab1Page} from "../tab1/tab1.page";

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  },
  {
    path:'tab1',
    component: Tab1Page,
  }
];
console.log(routes)
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
