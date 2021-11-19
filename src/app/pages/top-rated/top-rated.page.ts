import { Component, OnInit } from '@angular/core';
import { Trail } from 'src/app/models/trail.model';
import { TrailService } from 'src/app/services/trail.service';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.page.html',
  styleUrls: ['./top-rated.page.scss'],
})
export class TopRatedPage implements OnInit {

  trail = {
    name: '',
    description: '',
    length: ''
  };
  trails: Trail[];

  currentTrail = null;
  currentIndex = -1;

  name = '';
  message = '';

  constructor(private trailService: TrailService) { }

  ngOnInit() {
    this.retrieveTrails();
    this.message = '';
  }

   //get all trails
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
  //refresh list
  refreshList() {
    this.retrieveTrails();
    this.currentTrail = null;
    this.currentIndex = -1;
  }

  setActiveTrail(trail, index) {
    this.currentTrail = trail;
    this.currentIndex = index;
  }
}
