import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AgendaViewComponent} from './components/agenda-view/agenda-view.component';
import {DashboardViewComponent} from "../dashboard/dashboard-view/dashboard-view.component";
import {canActivate, canMatch} from "../../core/services/permission.service";

const routes: Routes =
  [{path: '', component: AgendaViewComponent},
    {path: '', canActivate: [canActivate], canMatch: [() => canMatch(['ADMIN'])], component: DashboardViewComponent}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgendaRoutingModule {
}
