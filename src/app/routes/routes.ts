import { Routes } from '@angular/router';

import { LoginPageComponent } from '../pages/login-page/login-page.component';
import { ProfilePageComponent } from '../pages/profile-page/profile-page.component';
import { SignupPageComponent } from '../pages/signup-page/signup-page.component';
import { AvailabilityPageComponent } from '../pages/availability-page/availability-page.component';


const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: 'auth/login', component: LoginPageComponent },
  { path: 'auth/signup', component: SignupPageComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'availability', component: AvailabilityPageComponent }
];

export { routes };
