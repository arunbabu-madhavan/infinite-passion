import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderHoverLedButtonComponent } from './border-hover-led-button.component';

describe('BorderHoverLedButtonComponent', () => {
  let component: BorderHoverLedButtonComponent;
  let fixture: ComponentFixture<BorderHoverLedButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorderHoverLedButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorderHoverLedButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
