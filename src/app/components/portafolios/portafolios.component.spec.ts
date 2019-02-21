import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortafoliosComponent } from './portafolios.component';

describe('PortafoliosComponent', () => {
  let component: PortafoliosComponent;
  let fixture: ComponentFixture<PortafoliosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortafoliosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortafoliosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
