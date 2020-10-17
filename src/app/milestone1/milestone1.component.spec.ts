import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Milestone1Component } from './milestone1.component';

describe('Milestone1Component', () => {
  let component: Milestone1Component;
  let fixture: ComponentFixture<Milestone1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Milestone1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Milestone1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
