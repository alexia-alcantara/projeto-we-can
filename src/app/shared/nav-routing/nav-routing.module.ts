import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationRouting } from './nav-routing.routing';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(NavigationRouting)
    ]
})
export class NavRoutingModule { }
