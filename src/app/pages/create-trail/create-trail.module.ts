import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateTrailPageRoutingModule } from './create-trail-routing.module';

import { CreateTrailPage } from './create-trail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateTrailPageRoutingModule
  ],
  declarations: [CreateTrailPage]
})
export class CreateTrailPageModule {}
