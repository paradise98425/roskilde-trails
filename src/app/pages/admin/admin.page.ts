import { Component, OnInit } from '@angular/core';
import { Trail } from 'src/app/models/trail.model';
import { TrailService } from 'src/app/services/trail.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit{

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

  //add trail
addTrail() {
  const data = {
    name: this.trail.name,
    description: this.trail.description,
    length: this.trail.length
  };

  this.trailService.create(data)
    .subscribe(
      response => {
        console.log(response);
        this.retrieveTrails();
      },
      error => {
        console.log(error);
      });
}
  //automatically refresh list - doesn't work atm
  refreshList() {
    this.retrieveTrails();
    this.currentTrail = null;
    this.currentIndex = -1;
  }

  setActiveTrail(trail, index) {
    this.currentTrail = trail;
    this.currentIndex = index;
  }
 
  //find by name
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
  
  //delete all trails
  removeAllTrails() {
    this.trailService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveTrails();
        },
        error => {
          console.log(error);
        });
  }

  //get trail
  getTrail(id) {
    this.trailService.get(id)
      .subscribe(
        data => {
          this.currentTrail = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  //update trail
  updateTrail() {
    this.trailService.update(this.currentTrail.id, this.currentTrail)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The tutorial was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteTrail() {
    this.trailService.delete(this.currentTrail.id)
      .subscribe(
        response => {
          console.log(response);
          this.retrieveTrails();
        },
        error => {
          console.log(error);
        });
  }

 }
