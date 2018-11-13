import { TestBed } from '@angular/core/testing';

import { DepartmentSerService } from './department-ser.service';

describe('DepartmentSerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DepartmentSerService = TestBed.get(DepartmentSerService);
    expect(service).toBeTruthy();
  });
});
