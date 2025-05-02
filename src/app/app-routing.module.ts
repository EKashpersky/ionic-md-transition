import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'first-page',
    loadChildren: () => import('./first-page/first-page.module').then(m => m.FirstPageModule)
  },
  {
    path: 'second-page',
    loadChildren: () => import('./second-page/second-page.module').then(m => m.SecondPageModule)
  },
  {
    path: 'third-page',
    loadChildren: () => import('./third-page/third-page.module').then(m => m.ThirdPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
