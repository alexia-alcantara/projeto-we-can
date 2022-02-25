import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavRoutingComponent } from './shared/nav-routing/nav-routing.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';


/* PRIMENG */
import { ButtonModule } from 'primeng/button';
import { LoginComponent } from './pages/access/login/login.component';
import { ForgotPasswordComponent } from './pages/access/forgot-password/forgot-password.component';
import { RegisterComponent } from './pages/access/register/register.component';
import { InputMaskModule } from 'primeng/inputmask';

@NgModule({
  declarations: [
    AppComponent,
    NavRoutingComponent,
    LandingPageComponent,
    LoginComponent,
    ForgotPasswordComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    InputMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
