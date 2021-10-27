import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrailDetailsPageRoutingModule } from './trail-details-routing.module';

import { TrailDetailsPage } from './trail-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrailDetailsPageRoutingModule
  ],
  declarations: [TrailDetailsPage]
})
export class TrailDetailsPageModule {}
