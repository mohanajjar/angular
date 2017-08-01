import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraceErreurComponent } from './trace-erreur.component';

describe('TraceErreurComponent', () => {
  let component: TraceErreurComponent;
  let fixture: ComponentFixture<TraceErreurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraceErreurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraceErreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
