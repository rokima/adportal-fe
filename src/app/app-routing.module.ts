import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { HomeComponent } from './components/home/home.component';
import { TermsComponent } from './components/terms/terms.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'registration', component: UserRegistrationComponent },
  {path: 'terms', component: TermsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
