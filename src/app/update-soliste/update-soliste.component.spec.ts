import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSolisteComponent } from './update-soliste.component';

describe('UpdateSolisteComponent', () => {
  let component: UpdateSolisteComponent;
  let fixture: ComponentFixture<UpdateSolisteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateSolisteComponent]
    });
    fixture = TestBed.createComponent(UpdateSolisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
