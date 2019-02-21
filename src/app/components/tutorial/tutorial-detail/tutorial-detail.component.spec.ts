import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialDetailComponent } from './tutorial-detail.component';

describe('TutorialDetailComponent', () => {
  let component: TutorialDetailComponent;
  let fixture: ComponentFixture<TutorialDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
