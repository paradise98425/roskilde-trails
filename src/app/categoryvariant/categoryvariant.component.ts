import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-categoryvariant',
  templateUrl: './categoryvariant.component.html',
  styleUrls: ['./categoryvariant.component.scss'],
})
export class CategoryvariantComponent implements OnInit {

  @Input() categoryvarianttitle: string;

  constructor() { }

  ngOnInit() {}

}
