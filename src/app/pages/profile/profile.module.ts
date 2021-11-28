import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import { IonicStorageModule } from '@ionic/storage-angular';
import { TrailcardComponent } from '../../trailcard/trailcard.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [ProfilePage, TrailcardComponent]
})
export class ProfilePageModule {}
