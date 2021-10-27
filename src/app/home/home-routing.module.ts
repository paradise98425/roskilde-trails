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
        path: 'profile',
        loadChildren: () => import('../pages/profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: 'home-component/top-rated',
        loadChildren: () => import('../pages/top-rated/top-rated.module').then( m => m.TopRatedPageModule)
      },
      {
        path: 'home-component/lake',
        loadChildren: () => import('../pages/lake/lake.module').then( m => m.LakePageModule)
      },
      {
        path: 'home-component/nature',
        loadChildren: () => import('../pages/nature/nature.module').then( m => m.NaturePageModule)
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
