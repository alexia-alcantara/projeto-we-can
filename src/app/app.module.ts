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
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarRegisterComponent } from './components/navbar-register/navbar-register.component';


/* PRIMENG */
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { DataViewModule } from 'primeng/dataview';

import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TabViewModule } from 'primeng/tabview';
import { PaginatorModule } from 'primeng/paginator';
import { ResultsListComponent } from './pages/results-list/results-list.component';
import { DetailsImmobileComponent } from './pages/results-list/details-immobile/details-immobile.component';


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
    HomeComponent,
    NavbarComponent,
    NavbarRegisterComponent,
    ResultsListComponent,
    DetailsImmobileComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    CardModule,
    CheckboxModule,
    DataViewModule,
    FormsModule,
    InputTextModule,
    InputMaskModule,
    InputTextareaModule,
    DropdownModule,
    ReactiveFormsModule,
    PaginatorModule,
    TabViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
