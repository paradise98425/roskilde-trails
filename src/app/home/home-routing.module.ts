import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'explore',
        loadChildren: () => import('../pages/explore/explore.module').then( m => m.ExplorePageModule)
      },
      {
        path: 'gallery',
        loadChildren: () => import('../pages/gallery/gallery.module').then( m => m.GalleryPageModule)
      },
      {
        path: 'home-component',
        loadChildren: () => import('../pages/home-component/home-component.module').then( m => m.HomeComponentPageModule)
      },
      {
        path: 'badges',
        loadChildren: () => import('../pages/badges/badges.module').then( m => m.BadgesPageModule)
      },
      {
        path: '',
        redirectTo: '/home/home-component',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
