import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardViewComponent} from './dashboard-view/dashboard-view.component';
import {canActivate} from "../../core/services/permission.service";

const dashboardRoutes: Routes = [
  {
    path: '', canActivate: [canActivate], component: DashboardViewComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}

