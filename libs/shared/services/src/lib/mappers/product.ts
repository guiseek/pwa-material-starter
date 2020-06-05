import { Product } from '@amd/core/entities';

export const createProductObject = ({
  price = 0,
  created = {
    uid: '',
    timestamp: new Date()
  },
  ...product
}: Partial<Product>): Product => {
  return { ...product, price, created } as Product;
}
