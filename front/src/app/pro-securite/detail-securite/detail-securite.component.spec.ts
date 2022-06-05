import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSecuriteComponent } from './detail-securite.component';

describe('DetailSecuriteComponent', () => {
  let component: DetailSecuriteComponent;
  let fixture: ComponentFixture<DetailSecuriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailSecuriteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailSecuriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
