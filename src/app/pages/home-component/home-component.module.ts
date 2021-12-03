import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeComponentPageRoutingModule } from './home-component-routing.module';

import { HomeComponentPage } from './home-component.page';

import { IonicStorageModule } from '@ionic/storage-angular';
import { CategoriesComponent } from '../../categories/categories.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeComponentPageRoutingModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [HomeComponentPage, CategoriesComponent]
})
export class HomeComponentPageModule {}
