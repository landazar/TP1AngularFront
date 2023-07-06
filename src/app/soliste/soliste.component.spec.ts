import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolisteComponent } from './soliste.component';

describe('SolisteComponent', () => {
  let component: SolisteComponent;
  let fixture: ComponentFixture<SolisteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolisteComponent]
    });
    fixture = TestBed.createComponent(SolisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
