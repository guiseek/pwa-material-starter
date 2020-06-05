import { CommonUiMaterialModule } from '@amd/common/ui-material';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    CommonUiMaterialModule,
    RouterModule.forChild([
      { path: '', component: DashboardComponent }
    ]),
  ],
})
export class AdminDashboardModule {}
