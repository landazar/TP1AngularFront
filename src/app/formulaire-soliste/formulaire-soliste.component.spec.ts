import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireSolisteComponent } from './formulaire-soliste.component';

describe('FormulaireSolisteComponent', () => {
  let component: FormulaireSolisteComponent;
  let fixture: ComponentFixture<FormulaireSolisteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormulaireSolisteComponent]
    });
    fixture = TestBed.createComponent(FormulaireSolisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
