import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SetupRatesComponent } from './main/article/setup-rates/setup-rates.component';
import { SetupClaimsComponent } from './main/article/setup-claims/setup-claims.component';
import { ClaimsInfoComponent } from './main/article/claims-info/claims-info.component';


const routes: Routes = [
  { path: 'setup-rates', component: SetupRatesComponent },
  { path: 'setup-claims', component: SetupClaimsComponent },
  { path: 'claims-info', component: ClaimsInfoComponent },
  { path: '', redirectTo: '/setup-rates', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
  routes: Routes
}
