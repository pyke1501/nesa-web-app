import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiManagementComponent } from './kpi-management.component';

describe('KpiManagementComponent', () => {
  let component: KpiManagementComponent;
  let fixture: ComponentFixture<KpiManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KpiManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KpiManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
