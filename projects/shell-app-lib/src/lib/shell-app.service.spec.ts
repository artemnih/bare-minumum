import {TestBed} from '@angular/core/testing';

import {ShellAppService} from './shell-app.service';

describe('ShellAppService', () => {
  let service: ShellAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShellAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
