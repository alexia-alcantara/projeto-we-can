import { RegisterComponent } from './pages/access/register/register.component';
import { ForgotPasswordComponent } from './pages/access/forgot-password/forgot-password.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginComponent } from './pages/access/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    /*Route Default */
    { path: '', redirectTo: 'landing-page', pathMatch: 'full' },
    { path: 'landing-page', component: LandingPageComponent },
    { path: 'login', component: LoginComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: 'register', component: RegisterComponent },

    {
        path: '', loadChildren: () => import('./shared/nav-routing/nav-routing.module').
            then(m => m.NavRoutingModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
