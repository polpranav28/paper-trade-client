import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsComponent } from './components/stats/stats.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CommonNgZorroAntdModule } from 'src/app/ng-zorro-antd.module';

@NgModule({
  declarations: [StatsComponent],
  imports: [CommonModule, DashboardRoutingModule, CommonNgZorroAntdModule],
})
export class DashboardModule {}
