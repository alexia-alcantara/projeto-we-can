import { Routes } from '@angular/router';
import { NavRoutingComponent } from './nav-routing.component';

export const NavigationRouting: Routes = [
    {
        path: '', component: NavRoutingComponent,
        children: [
            {}
        ]
    }
]