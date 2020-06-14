import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UsersListComponent} from './components/users-list/users-list.component';
import {UserRegistrationComponent} from './components/user-registration/user-registration.component';
import {TermsComponent} from './components/terms/terms.component';
import {HomeComponent} from './components/home/home.component';
import {HomeAdSectionComponent} from './components/home/home-ad-section.component';
import {ViewHeaderComponent} from './components/view-header/view-header.component';
import {SpinnerComponent} from './components/spinner/spinner.component';
import {AdvertisementsListComponent} from './components/advertisements-list/advertisements-list.component';
import {AdvertisementDetailsComponent} from './components/advertisement-details/advertisement-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UserRegistrationComponent,
    TermsComponent,
    HomeComponent,
    HomeAdSectionComponent,
    ViewHeaderComponent,
    SpinnerComponent,
    AdvertisementsListComponent,
    AdvertisementDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
