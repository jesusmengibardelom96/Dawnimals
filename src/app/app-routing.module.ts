import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  /*{
    path: 'list',
    loadChildren: () => import('./tabs/list/list.module').then( m => m.ListPageModule)
  },*/
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'edit-mal',
    loadChildren: () => import('./edit-mal/edit-mal.module').then( m => m.EditMalPageModule)
  },
  {
    path: 'add-animal',
    loadChildren: () => import('./add-animal/add-animal.module').then( m => m.AddAnimalPageModule)
  },
  /*{
    path: 'tab2',
    loadChildren: () => import('./tabs/tab2/tab2.module').then( m => m.Tab2PageModule)
  },*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
