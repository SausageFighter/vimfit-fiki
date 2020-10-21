import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Milestone2Component } from './milestone2.component';

describe('Milestone2Component', () => {
  let component: Milestone2Component;
  let fixture: ComponentFixture<Milestone2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Milestone2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Milestone2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
