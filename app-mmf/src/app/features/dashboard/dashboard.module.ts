import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardViewComponent} from './dashboard-view/dashboard-view.component';
import {AgendaModule} from '../agenda/agenda.module';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {ApiDashboardService} from './services/api-dashboard.service';

@NgModule({
  declarations: [DashboardViewComponent],
  imports: [
    CommonModule, DashboardRoutingModule, AgendaModule],
  providers: [ApiDashboardService]

})
export class DashboardModule {
}
