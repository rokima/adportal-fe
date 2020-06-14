import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserRegistrationComponent} from './components/user-registration/user-registration.component';
import {HomeComponent} from './components/home/home.component';
import {TermsComponent} from './components/terms/terms.component';
import {UsersListComponent} from './components/users-list/users-list.component';
import {AdvertisementsListComponent} from './components/advertisements-list/advertisements-list.component';
import {AdvertisementDetailsComponent} from './components/advertisement-details/advertisement-details.component';
import {AdvertisementAddComponent} from './components/advertisement-add/advertisement-add.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'registration', component: UserRegistrationComponent},
  {path: 'terms', component: TermsComponent},
  {path: 'users-list', component: UsersListComponent},
  {path: 'advertisements-list', component: AdvertisementsListComponent},
  {path: 'advertisements-new', component: AdvertisementAddComponent},
  {path: 'advertisement/:id', component: AdvertisementDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
