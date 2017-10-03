import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MdButtonModule, MdCheckboxModule } from '@angular/material';

import { AppComponent } from './app.component';

import { AuthService } from './services/auth.service';
import { RequireAuthService } from './guards/require-auth.service';
import { AuthLoginComponent } from './components/auth-login/auth-login.component';
import { AuthLogoutComponent } from './components/auth-logout/auth-logout.component';

const routes: Routes = [
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },
  { path: 'auth/login', component: LoginPageComponent },
  { path: 'auth/signup', component: SignupPageComponent },
  { path: 'profile', component: ProfilePageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AuthLoginComponent,
    AuthLogoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MdButtonModule,
    MdCheckboxModule
  ],
  providers: [
    AuthService,
    RequireAuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
