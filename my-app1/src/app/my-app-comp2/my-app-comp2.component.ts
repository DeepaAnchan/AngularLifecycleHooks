import { Component } from '@angular/core';

@Component({
  selector: 'app-my-app-comp2',
  templateUrl: './my-app-comp2.component.html',
  styleUrls: ['./my-app-comp2.component.css']
})
export class MyAppComp2Component {
  constructor() {  
    console.log('MyAppComp2Component: constructor');
  }
}
