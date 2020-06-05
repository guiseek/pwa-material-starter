import { CommonUiMaterialModule } from '@amd/common/ui-material';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';


@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    CommonUiMaterialModule,
    RouterModule.forChild([
      { path: '', component: ProductsComponent }
    ]),
  ],
})
export class AdminProductsModule {}
