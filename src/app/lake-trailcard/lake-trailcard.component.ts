import { Component, OnInit } from '@angular/core';
import { Trail } from 'src/app/models/trail.model';
import { TrailService } from 'src/app/services/trail.service';

@Component({
  selector: 'app-lake-trailcard',
  templateUrl: './lake-trailcard.component.html',
  styleUrls: ['./lake-trailcard.component.scss'],
})
export class LakeTrailcardComponent implements OnInit {

  trail = {
    name: '',
    description: '',
    length: '',
    est_time: ''
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
    this.currentTrail.name = name;
    console.log(this.trail);
  }

}
