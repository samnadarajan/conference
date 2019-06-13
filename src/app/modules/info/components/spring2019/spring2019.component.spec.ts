import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Spring2019Component } from './spring2019.component';

describe('Spring2019Component', () => {
  let component: Spring2019Component;
  let fixture: ComponentFixture<Spring2019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Spring2019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Spring2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
