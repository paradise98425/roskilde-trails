import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LakePage } from './lake.page';

const routes: Routes = [
  {
    path: '',
    component: LakePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LakePageRoutingModule {}
