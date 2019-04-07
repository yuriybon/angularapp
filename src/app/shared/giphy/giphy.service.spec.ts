import { TestBed } from '@angular/core/testing';
import {describe, expect} from 'jasmine/types/';


import { GiphyService } from './giphy.service';

describe('GiphyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GiphyService = TestBed.get(GiphyService);
    expect(service).toBeTruthy();
  });
});
