import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderHoverButtonComponent } from './border-hover-button.component';

describe('BorderHoverButtonComponent', () => {
  let component: BorderHoverButtonComponent;
  let fixture: ComponentFixture<BorderHoverButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorderHoverButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorderHoverButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
