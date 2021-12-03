import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NaturePageRoutingModule } from './nature-routing.module';

import { NaturePage } from './nature.page';

import { NatureTrailcardComponent } from '../../nature-trailcard/nature-trailcard.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NaturePageRoutingModule
  ],
  declarations: [NaturePage, NatureTrailcardComponent]
})
export class NaturePageModule {}
