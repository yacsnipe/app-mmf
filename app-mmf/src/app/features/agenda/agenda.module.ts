import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AgendaRoutingModule} from './agenda-routing.module';
import {AgendaViewComponent} from './components/agenda-view/agenda-view.component';

@NgModule({
  declarations: [
    AgendaViewComponent
  ],
  imports: [
    CommonModule,
    AgendaRoutingModule
  ]
})
export class AgendaModule {
}
