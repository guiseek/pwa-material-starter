import { NgModule } from '@angular/core';
import { AuthService, FirestoreService } from './firebase';
import { AuthGuard } from './guards';

@NgModule({
  providers: [
    AuthGuard,
    AuthService,
    FirestoreService
  ]
})
export class SharedServicesModule {}
