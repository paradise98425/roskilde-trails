import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Trail } from 'src/app/models/trail.model';
import { TrailService } from 'src/app/services/trail.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.page.html',
  styleUrls: ['./home-component.page.scss'],
})
export class HomeComponentPage implements OnInit {

  trail = {
    name: '',
    description: '',
    length: '',
    est_time: '',
    category: '',
    trail_pic: '',
    rating: ''
  };

  trails: Trail[];

  currentTrail = null;
  currentIndex = -1;

  name = '';
  message = '';

  ;

  constructor(private trailService: TrailService, private storage: Storage ) { }

  storageItems = []
  async ngOnInit() {
    await this.storage.create();
    const name = await this.storage.get('name')
    this.storageItems.push({'name': name})

    console.log('storageItems', this.storageItems)

    this.message = '';
  }

  searchName() {
    this.trailService.findByName(this.name)
      .subscribe(
        data => {
          this.trails = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  
  retrieveTrails() {
    this.trailService.getAll()
      .subscribe(
        data => {
          this.trails = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  setActiveTrail(trail, index) {
    this.currentTrail = trail;
    this.currentIndex = index;
  }

}
