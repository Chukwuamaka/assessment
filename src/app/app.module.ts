import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './main/header/header.component';
import { ArticleComponent } from './main/article/article.component';
import { SetupRatesComponent } from './main/article/setup-rates/setup-rates.component';
import { NewRateComponent } from './main/article/setup-rates/new-rate.component';
import { FixedRatesComponent } from './main/article/setup-rates/fixed-rates.component';
import { VariableRatesComponent } from './main/article/setup-rates/variable-rates.component';
import { SetupClaimsComponent } from './main/article/setup-claims/setup-claims.component';
import { ClaimsInfoComponent } from './main/article/claims-info/claims-info.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBook, faUser, faAngleDown, faSuitcase, faCopyright, faQuestionCircle, faCog, faSearch, faHome, faPlusCircle, faSave, faSquare, faPencilAlt, faTrashAlt, faFilter, faCircle } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt, faBell, faClock } from '@fortawesome/free-regular-svg-icons';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    MainComponent,
    HeaderComponent,
    ArticleComponent,
    SetupRatesComponent,
    NewRateComponent,
    FixedRatesComponent,
    VariableRatesComponent,
    SetupClaimsComponent,
    ClaimsInfoComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(faBook, faUser, faAngleDown, faCalendarAlt, faSuitcase, faCopyright, faQuestionCircle, faBell, faClock, faCog, faSearch, faHome, faPlusCircle, faSave, faSquare, faPencilAlt, faTrashAlt, faFilter, faCircle);
  }
}
