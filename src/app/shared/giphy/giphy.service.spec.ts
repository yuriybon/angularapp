import { TestBed } from '@angular/core/testing';

import { GiphyService } from './giphy.service';
import {describe, expect} from 'jasmine';

describe('GiphyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GiphyService = TestBed.get(GiphyService);
    expect(service).toBeTruthy();
  });
});
