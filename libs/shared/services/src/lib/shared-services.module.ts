import { NgModule } from '@angular/core';
import { AuthService, FirestoreService } from './firebase';
import { AuthGuard } from './guards';
import { ProductService } from './product.service';

@NgModule({
  providers: [
    AuthGuard,
    AuthService,
    FirestoreService,
    ProductService
  ]
})
export class SharedServicesModule {}
