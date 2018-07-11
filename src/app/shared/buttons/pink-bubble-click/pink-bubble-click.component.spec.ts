import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinkBubbleClickComponent } from './pink-bubble-click.component';

describe('PinkBubbleClickComponent', () => {
  let component: PinkBubbleClickComponent;
  let fixture: ComponentFixture<PinkBubbleClickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinkBubbleClickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinkBubbleClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
