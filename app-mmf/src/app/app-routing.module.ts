import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [

  {
    path: '',
    redirectTo: 'agenda',
    pathMatch: 'full'
  },
  { path: 'agenda', loadChildren: () => import('./features/agenda/agenda.module').then(m => m.AgendaModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }

