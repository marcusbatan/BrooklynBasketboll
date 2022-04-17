/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BookServiceService } from './bookService.service';

describe('Service: BookService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookServiceService]
    });
  });

  it('should ...', inject([BookServiceService], (service: BookServiceService) => {
    expect(service).toBeTruthy();
  }));
});
