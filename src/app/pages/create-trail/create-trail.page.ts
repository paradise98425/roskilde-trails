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
    length: ''
  };

  constructor(private trailService: TrailService) { }

  ngOnInit() {
  }

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
        },
        error => {
          console.log(error);
        });
  }

}
