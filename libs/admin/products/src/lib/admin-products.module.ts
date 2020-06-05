import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonUiMaterialModule } from '@orgui/common/ui-material';
import { ProductsComponent } from './products.component';


@NgModule({
  imports: [
    CommonModule,
    CommonUiMaterialModule,
    RouterModule.forChild([
      { path: '', component: ProductsComponent }
    ]),
  ],
})
export class AdminProductsModule {}
