import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawnServicesComponent } from './lawn-services.component';

describe('LawnServicesComponent', () => {
  let component: LawnServicesComponent;
  let fixture: ComponentFixture<LawnServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LawnServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LawnServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
