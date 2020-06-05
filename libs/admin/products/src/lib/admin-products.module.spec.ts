import { async, TestBed } from '@angular/core/testing';
import { AdminProductsModule } from './admin-products.module';

describe('AdminProductsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AdminProductsModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AdminProductsModule).toBeDefined();
  });
});
