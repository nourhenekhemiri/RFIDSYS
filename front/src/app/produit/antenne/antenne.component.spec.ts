import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntenneComponent } from './antenne.component';

describe('AntenneComponent', () => {
  let component: AntenneComponent;
  let fixture: ComponentFixture<AntenneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntenneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AntenneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
