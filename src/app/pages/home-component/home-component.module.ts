import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeComponentPageRoutingModule } from './home-component-routing.module';

import { HomeComponentPage } from './home-component.page';

import { IonicStorageModule } from '@ionic/storage-angular';

import { SavedTrailcardComponent } from '../../saved-trailcard/saved-trailcard.component';

import { TrailcardComponent } from '../../trailcard/trailcard.component';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    
    HomeComponentPageRoutingModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [HomeComponentPage, SavedTrailcardComponent, TrailcardComponent]
})
export class HomeComponentPageModule {}
