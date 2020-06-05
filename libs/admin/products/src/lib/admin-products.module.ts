import { CommonUiMaterialModule } from '@amd/common/ui-material';
import { SharedServicesModule } from '@amd/shared/services';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductsComponent } from './products.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedServicesModule,
    CommonUiMaterialModule,
    RouterModule.forChild([
      { path: '', component: ProductsComponent }
    ]),
  ],
})
export class AdminProductsModule {}
