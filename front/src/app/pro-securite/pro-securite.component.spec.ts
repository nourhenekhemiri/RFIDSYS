import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProSecuriteComponent } from './pro-securite.component';

describe('ProSecuriteComponent', () => {
  let component: ProSecuriteComponent;
  let fixture: ComponentFixture<ProSecuriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProSecuriteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProSecuriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
