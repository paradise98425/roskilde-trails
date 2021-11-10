import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {

   constructor(
    private actionSheetController: ActionSheetController) { }

  async actionsheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Profile Settings',
      buttons: [{
        text: 'Delete profile',
        role: 'destructive',
      }, 
       {
        text: 'Update picture',       
      },{
        text: 'Cancel',
        role: 'cancel',
      }]
    });
    await actionSheet.present();
  }
}


 

  // const name = await this.storage.get('name');
  // console.log('name from ionic/angular storage', name);


