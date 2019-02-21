import { TestBed } from '@angular/core/testing';

import { TutorialesService } from './tutoriales.service';

describe('TutorialesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TutorialesService = TestBed.get(TutorialesService);
    expect(service).toBeTruthy();
  });
});
