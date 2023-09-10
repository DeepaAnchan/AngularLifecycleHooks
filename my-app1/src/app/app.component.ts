import { AfterViewChecked, AfterViewInit, Component, ViewChild } from '@angular/core';
import { MyAppComp1Component } from './my-app-comp1/my-app-comp1.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, AfterViewChecked  {

  @ViewChild(MyAppComp1Component) viewChild!: MyAppComp1Component;

  comp1Name: string = '';

  constructor() {
    console.log('AppComponent: constructor');
    this.comp1Name = 'ttt';
  }
  
  ngAfterViewInit(): void {
    console.log('AppComponent: ngAfterViewInit', this.viewChild.text1);
  }

  ngAfterViewChecked(): void {
    console.log('AppComponent: ngAfterViewChecked', this.viewChild.text1);
  }
}

