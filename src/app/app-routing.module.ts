import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./pages/gallery/gallery.module').then( m => m.GalleryPageModule)
  },
  {
    path: 'explore',
    loadChildren: () => import('./pages/explore/explore.module').then( m => m.ExplorePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'top-rated',
    loadChildren: () => import('./pages/top-rated/top-rated.module').then( m => m.TopRatedPageModule)
  },
  {
    path: 'lake',
    loadChildren: () => import('./pages/lake/lake.module').then( m => m.LakePageModule)
  },
  {
    path: 'nature',
    loadChildren: () => import('./pages/nature/nature.module').then( m => m.NaturePageModule)
  },
  {
    path: 'trail-details',
    loadChildren: () => import('./pages/trail-details/trail-details.module').then( m => m.TrailDetailsPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'create-trail',
    loadChildren: () => import('./pages/create-trail/create-trail.module').then( m => m.CreateTrailPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
