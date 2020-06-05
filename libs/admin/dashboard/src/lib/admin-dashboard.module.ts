import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonUiMaterialModule } from '@orgui/common/ui-material';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    CommonUiMaterialModule,
    RouterModule.forChild([
      { path: '', component: DashboardComponent }
    ]),
  ],
})
export class AdminDashboardModule {}
