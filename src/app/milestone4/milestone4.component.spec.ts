import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Milestone3Component } from './milestone3.component';

describe('Milestone3Component', () => {
  let component: Milestone3Component;
  let fixture: ComponentFixture<Milestone3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Milestone3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Milestone3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
