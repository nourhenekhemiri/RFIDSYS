import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuriteAjoutComponent } from './securite-ajout.component';

describe('SecuriteAjoutComponent', () => {
  let component: SecuriteAjoutComponent;
  let fixture: ComponentFixture<SecuriteAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecuriteAjoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuriteAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
