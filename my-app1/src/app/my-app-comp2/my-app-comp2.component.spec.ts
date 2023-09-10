import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAppComp2Component } from './my-app-comp2.component';

describe('MyAppComp2Component', () => {
  let component: MyAppComp2Component;
  let fixture: ComponentFixture<MyAppComp2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyAppComp2Component]
    });
    fixture = TestBed.createComponent(MyAppComp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
