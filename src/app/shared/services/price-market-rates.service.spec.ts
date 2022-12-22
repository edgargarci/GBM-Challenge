import { TestBed } from '@angular/core/testing';

import { PriceMarketRatesService } from './price-market-rates.service';

describe('PriceMarketRatesService', () => {
  let service: PriceMarketRatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PriceMarketRatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
