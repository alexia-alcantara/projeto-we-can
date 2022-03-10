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
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

/* PRIMENG */
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';

import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { TabViewModule } from 'primeng/tabview';
import { PaginatorModule } from 'primeng/paginator';
import { ResultsListComponent } from './pages/results-list/results-list.component';
import { DetailsImmobileComponent } from './pages/results-list/details-immobile/details-immobile.component';
import { NavbarLandingComponent } from './components/navbar-landing/navbar-landing.component';
import { FooterComponent } from './components/footer/footer.component';
import { ConfirmReservationComponent } from './pages/results-list/confirm-reservation/confirm-reservation.component';
import { PaymentComponent } from './pages/results-list/confirm-reservation/payment/payment.component';
import { SolicitacaoAnfitriaoComponent } from './pages/results-list/confirm-reservation/solicitacao-anfitriao/solicitacao-anfitriao.component';
import { ReservationCompletedComponent } from './pages/results-list/confirm-reservation/reservation-completed/reservation-completed.component';


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
    NavbarLandingComponent,
    FooterComponent,
    ConfirmReservationComponent,
    PaymentComponent,
    SolicitacaoAnfitriaoComponent,
    ReservationCompletedComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    CardModule,
    CheckboxModule,
    DataViewModule,
    DialogModule,
    FormsModule,
    InputTextModule,
    InputMaskModule,
    InputTextareaModule,
    NgxStarRatingModule,
    TooltipModule,
    DropdownModule,
    ReactiveFormsModule,
    PaginatorModule,
    TabViewModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
