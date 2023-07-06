import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefOrchestreComponent } from './chef-orchestre.component';

describe('ChefOrchestreComponent', () => {
  let component: ChefOrchestreComponent;
  let fixture: ComponentFixture<ChefOrchestreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChefOrchestreComponent]
    });
    fixture = TestBed.createComponent(ChefOrchestreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
