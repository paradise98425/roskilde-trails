import { Component, OnInit } from '@angular/core';
import { TrailService } from 'src/app/services/trail.service';

@Component({
  selector: 'app-create-trail',
  templateUrl: './create-trail.page.html',
  styleUrls: ['./create-trail.page.scss'],
})
export class CreateTrailPage implements OnInit {

  trail = {
    name: '',
    description: '',
    length: '',
    est_time: ''
  };

  constructor(private trailService: TrailService) { }

  ngOnInit() {
  }

  addTrail() {
    const data = {
      name: this.trail.name,
      description: this.trail.description,
      length: this.trail.length,
      est_time: this.trail.est_time
    };

    this.trailService.create(data)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

}
