import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.page.html',
  styleUrls: ['./home-component.page.scss'],
})
export class HomeComponentPage implements OnInit {

  constructor(private storage: Storage) { }

  storageItems = []
  async ngOnInit() {
    await this.storage.create();
    const name = await this.storage.get('name')
    this.storageItems.push({'name': name})

    console.log('storageItems', this.storageItems)
  }

}
