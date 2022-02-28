import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavRoutingComponent } from './shared/nav-routing/nav-routing.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ForgotPasswordComponent } from './pages/access/forgot-password/forgot-password.component';
import { RegisterComponent } from './pages/access/register/register.component';
import { LoginComponent } from './pages/access/login/login.component';
import { CompleteRegistrationComponent } from './pages/access/complete-registration/complete-registration.component';
import { RegisterImmobileComponent } from './pages/access/register-immobile/register-immobile.component';


/* PRIMENG */
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TabViewModule } from 'primeng/tabview';


@NgModule({
  declarations: [
    AppComponent,
    NavRoutingComponent,
    LandingPageComponent,
    LoginComponent,
    ForgotPasswordComponent,
    RegisterComponent,
    CompleteRegistrationComponent,
    RegisterImmobileComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    CheckboxModule,
    FormsModule,
    InputTextModule,
    InputMaskModule,
    InputTextareaModule,
    DropdownModule,
    ReactiveFormsModule,
    TabViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
