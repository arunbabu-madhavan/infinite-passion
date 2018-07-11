import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitionalButtonsComponent } from './transitional-buttons.component';

describe('TransitionalButtonsComponent', () => {
  let component: TransitionalButtonsComponent;
  let fixture: ComponentFixture<TransitionalButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransitionalButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransitionalButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
