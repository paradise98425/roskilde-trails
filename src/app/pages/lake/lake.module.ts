import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LakePageRoutingModule } from './lake-routing.module';

import { LakePage } from './lake.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LakePageRoutingModule
  ],
  declarations: [LakePage]
})
export class LakePageModule {}
