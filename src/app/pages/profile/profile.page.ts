import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private storage: Storage) { }

  storageItems = []
  async ngOnInit() {
    await this.storage.create();
    const name = await this.storage.get('name')
    this.storageItems.push({'name': name})

    console.log('storageItems', this.storageItems)
  }

 

  // const name = await this.storage.get('name');
  // console.log('name from ionic/angular storage', name);

}
