import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OkrManagementComponent } from './okr-management.component';

describe('OkrManagementComponent', () => {
  let component: OkrManagementComponent;
  let fixture: ComponentFixture<OkrManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OkrManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OkrManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
