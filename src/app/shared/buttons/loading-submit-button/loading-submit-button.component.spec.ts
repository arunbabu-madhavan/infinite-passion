import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingSubmitButtonComponent } from './loading-submit-button.component';

describe('LoadingSubmitButtonComponent', () => {
  let component: LoadingSubmitButtonComponent;
  let fixture: ComponentFixture<LoadingSubmitButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingSubmitButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingSubmitButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
