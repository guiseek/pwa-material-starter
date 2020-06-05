import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: () =>
          import('@amd/admin/dashboard')
            .then(m => m.AdminDashboardModule)
      },
      {
        path: 'products',
        loadChildren: () =>
          import('@amd/admin/products')
            .then(m => m.AdminProductsModule)
      },
      {
        path: 'auth',
        loadChildren: () =>
          import('@amd/auth')
            .then(m => m.AuthModule)
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
