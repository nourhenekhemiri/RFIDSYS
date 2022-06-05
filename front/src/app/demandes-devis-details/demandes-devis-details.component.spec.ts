import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandesDevisDetailsComponent } from './demandes-devis-details.component';

describe('DemandesDevisDetailsComponent', () => {
  let component: DemandesDevisDetailsComponent;
  let fixture: ComponentFixture<DemandesDevisDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandesDevisDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandesDevisDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
