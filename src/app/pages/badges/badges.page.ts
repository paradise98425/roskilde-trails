import { Component, OnInit } from '@angular/core';

import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-badges',
  templateUrl: './badges.page.html',
  styleUrls: ['./badges.page.scss'],
})
export class BadgesPage implements OnInit {

    constructor(private storage: Storage) { }

  storageItems = []
  async ngOnInit() {
    await this.storage.create();
    const name = await this.storage.get('name')
    this.storageItems.push({'name': name})

    console.log('storageItems', this.storageItems)
  }


  

}
