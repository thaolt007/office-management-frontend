import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportTimesheetComponent } from './report-timesheet.component';

describe('ReportTimesheetComponent', () => {
  let component: ReportTimesheetComponent;
  let fixture: ComponentFixture<ReportTimesheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportTimesheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportTimesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
