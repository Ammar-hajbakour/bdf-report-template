import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortReportComponent } from './short-report.component';

describe('ShortReportComponent', () => {
  let component: ShortReportComponent;
  let fixture: ComponentFixture<ShortReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
