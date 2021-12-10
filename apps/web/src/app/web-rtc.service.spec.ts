/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WebRtcService } from './web-rtc.service';

describe('Service: WebRc', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebRtcService]
    });
  });

  it('should ...', inject([WebRtcService], (service: WebRtcService) => {
    expect(service).toBeTruthy();
  }));
});
