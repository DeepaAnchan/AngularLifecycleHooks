import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { MyAppComp1Component } from './my-app-comp1/my-app-comp1.component';
import { MyAppComp2Component } from './my-app-comp2/my-app-comp2.component';

const routes: Routes = [
    { path: 'first-component', component: MyAppComp1Component },
    { path: 'second-component', component: MyAppComp2Component }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }