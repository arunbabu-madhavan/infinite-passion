import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RotatingBorderButtonComponent } from './rotating-border-button.component';

describe('RotatingBorderButtonComponent', () => {
  let component: RotatingBorderButtonComponent;
  let fixture: ComponentFixture<RotatingBorderButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RotatingBorderButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RotatingBorderButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
