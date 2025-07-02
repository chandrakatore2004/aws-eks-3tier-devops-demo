import { TestBed } from '@angular/core/testing';
import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductService,
        {
          provide: 'AppConstants',
          useValue: {
            PRODUCT_API: 'http://dummy-api.com/products'
          }
        }
      ]
    });
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
