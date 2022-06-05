import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetecteurComponent } from './detecteur.component';

describe('DetecteurComponent', () => {
  let component: DetecteurComponent;
  let fixture: ComponentFixture<DetecteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetecteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetecteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
