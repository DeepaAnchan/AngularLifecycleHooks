import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAppComp1Component } from './my-app-comp1.component';

describe('MyAppComp1Component', () => {
  let component: MyAppComp1Component;
  let fixture: ComponentFixture<MyAppComp1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyAppComp1Component]
    });
    fixture = TestBed.createComponent(MyAppComp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
