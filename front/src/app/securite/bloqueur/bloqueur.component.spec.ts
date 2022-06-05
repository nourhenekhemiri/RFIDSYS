import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloqueurComponent } from './bloqueur.component';

describe('BloqueurComponent', () => {
  let component: BloqueurComponent;
  let fixture: ComponentFixture<BloqueurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloqueurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloqueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
