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
        path: '',
        redirectTo: '/home/explore',
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
