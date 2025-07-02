import { Product } from './product';

describe('Product', () => {
  it('should create an instance', () => {
    const product = new Product(
      1,             // id
      'Test Product', // name
      'test.png',     // image
      10.5,           // price
      5,              // quantity
      'desc',         // description
      true,           // active
      '2024-01-01',   // createdAt
      '2024-01-02',   // updatedAt
      2               // categoryId
    );
    expect(product).toBeTruthy();
  });
});
