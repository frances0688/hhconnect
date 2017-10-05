import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';


import { AppComponent } from './app.component';

import { AuthService } from './services/auth.service';
import { RequireAuthService } from './guards/require-auth.service';

import { AuthLoginComponent } from './components/auth-login/auth-login.component';
import { AuthLogoutComponent } from './components/auth-logout/auth-logout.component';
import { AuthSignupComponent } from './components/auth-signup/auth-signup.component';
import { AuthUserComponent } from './components/auth-user/auth-user.component';
import { MenuIconsComponent } from './components/menu-icons/menu-icons.component';
import { AvailabilityFormComponent } from './components/availability-form/availability-form.component';


import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { AvailabilityPageComponent } from './pages/availability-page/availability-page.component';

import { routes } from './routes/routes';

@NgModule({
  declarations: [
    AppComponent,
    AuthLoginComponent,
    AuthLogoutComponent,
    AuthSignupComponent,
    AuthUserComponent,
    LoginPageComponent,
    ProfilePageComponent,
    SignupPageComponent,
    MenuIconsComponent,
    AvailabilityFormComponent,
    AvailabilityPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthService,
    RequireAuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
