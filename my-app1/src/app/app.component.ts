import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  comp1Name: string = '';

  constructor() {
    console.log('AppComponent: constructor');
    this.comp1Name = 'ttt';
  }
}

