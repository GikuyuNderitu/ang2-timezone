import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesComponent } from './times.component';

describe('TimesComponent', () => {
  let component: TimesComponent;
  let fixture: ComponentFixture<TimesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
