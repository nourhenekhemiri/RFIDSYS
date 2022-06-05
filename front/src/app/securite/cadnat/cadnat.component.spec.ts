import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadnatComponent } from './cadnat.component';

describe('CadnatComponent', () => {
  let component: CadnatComponent;
  let fixture: ComponentFixture<CadnatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadnatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadnatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
