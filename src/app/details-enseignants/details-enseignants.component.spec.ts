import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsEnseignantsComponent } from './details-enseignants.component';

describe('DetailsEnseignantsComponent', () => {
  let component: DetailsEnseignantsComponent;
  let fixture: ComponentFixture<DetailsEnseignantsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsEnseignantsComponent]
    });
    fixture = TestBed.createComponent(DetailsEnseignantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
