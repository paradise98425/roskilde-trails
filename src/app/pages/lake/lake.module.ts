import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LakePageRoutingModule } from './lake-routing.module';

import { LakePage } from './lake.page';

import { LakeTrailcardComponent } from '../../lake-trailcard/lake-trailcard.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LakePageRoutingModule
  ],
  declarations: [LakePage, LakeTrailcardComponent]
})
export class LakePageModule {}
