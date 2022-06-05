import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandesDevisComponent } from './demandes-devis.component';

describe('DemandesDevisComponent', () => {
  let component: DemandesDevisComponent;
  let fixture: ComponentFixture<DemandesDevisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandesDevisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandesDevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
