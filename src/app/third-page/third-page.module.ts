import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ThirdPagePage } from './third-page.page';




const ROUTES = [
  {
    path: '',
    component: ThirdPagePage,
  }
] as Routes;

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [ThirdPagePage]
})
export class ThirdPageModule {}
