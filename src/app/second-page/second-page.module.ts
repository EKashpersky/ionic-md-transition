import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SecondPagePage } from './second-page.page';



const ROUTES = [
  {
    path: '',
    component: SecondPagePage,
  }
] as Routes;

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [SecondPagePage]
})
export class SecondPageModule {}
