import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticleAnimationComponent } from './particle-animation.component';

describe('ParticleAnimationComponent', () => {
  let component: ParticleAnimationComponent;
  let fixture: ComponentFixture<ParticleAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticleAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticleAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
