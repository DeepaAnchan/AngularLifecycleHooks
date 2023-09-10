import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyAppComp1Component } from './my-app-comp1/my-app-comp1.component';
import { AppRoutingModule } from './AppRoutingModule';
import { MyAppComp2Component } from './my-app-comp2/my-app-comp2.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MyAppComp1Component,
    MyAppComp2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
