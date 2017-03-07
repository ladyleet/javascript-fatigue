import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frameworks',
  templateUrl: './frameworks.component.html',
  styles: []
})
export class FrameworksComponent implements OnInit {

  frameworks = [{
    name: 'Angular',
    image: 'angular.png'
  },{
    name: 'Ember',
    image: 'ember.png'
  },{
    name: 'React',
    image: 'react.png'
  },{
    name: 'RxJS',
    image: 'rxjs.png'
  },{
    name: 'Polymer',
    image: 'polymer.png'
  }];

  constructor() { }

  ngOnInit() {
  }

}
