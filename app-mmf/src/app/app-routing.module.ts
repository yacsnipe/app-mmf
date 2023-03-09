import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignupComponent} from "./core/components/auth/signup/signup.component";
import {SigninComponent} from "./core/components/auth/signin/signin.component";

const routes: Routes = [

  
  {
    path: '',
    redirectTo: 'dashboard-view',
    pathMatch: 'full'
  },

  {path: 'auth/signup', component: SignupComponent},
  {path: 'auth/signin', component: SigninComponent},
  {
    path: 'dashboard-view',
    loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {path: 'agenda', loadChildren: () => import('./features/agenda/agenda.module').then(m => m.AgendaModule)},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}

