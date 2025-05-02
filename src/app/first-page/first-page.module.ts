import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { FirstPagePage } from './first-page.page';



const ROUTES = [
  {
    path: '',
    component: FirstPagePage,
  }
] as Routes;

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [FirstPagePage]
})
export class FirstPageModule {}
