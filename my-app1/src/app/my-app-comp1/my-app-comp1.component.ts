import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-my-app-comp1',
  templateUrl: './my-app-comp1.component.html',
  styleUrls: ['./my-app-comp1.component.css']
})
export class MyAppComp1Component implements OnChanges, OnInit {
  @Input()  name!: string;
  text1!: string;
  
  constructor() {
    this.text1 = '';
    console.log('MyAppComp1Component: constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('MyAppComp1Component: ngOnChanges');
    for (const propName in changes) {
      const chng = changes[propName];
      const cur  = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }
  ngOnInit(): void {
    console.log('MyAppComp1Component: ngOnInit');
  }
}
