import { Product } from '@amd/core/entities';
import { Injectable } from "@angular/core";
import { FirestoreService } from './firebase';

@Injectable()
export class ProductService extends FirestoreService<Product> {
  private path = 'products';

  collection() {
    return this.query(this.path);
  }

  async add(value: Product) {
    try {
      return await this.create(this.path, value);
    } catch (error) {
      console.error(error);
    }
  }

  async edit({ id, ...value }: Partial<Product>) {
    try {
      return await this.update(
        this.path + '/' + id, value
      );
    } catch (error) {
      console.error(error);
    }
  }

  async remove(id: string) {
    try {
      return await this.delete(this.path + '/' + id);
    } catch (error) {
      console.error(error);
    }
  }

}