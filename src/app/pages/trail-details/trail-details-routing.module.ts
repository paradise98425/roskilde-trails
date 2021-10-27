import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrailDetailsPage } from './trail-details.page';

const routes: Routes = [
  {
    path: '',
    component: TrailDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrailDetailsPageRoutingModule {}
