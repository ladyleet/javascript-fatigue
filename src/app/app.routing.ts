import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { FrameworksComponent } from './frameworks/frameworks.component';

const appRoutes: Routes = [
    { path: '/', component: FrameworksComponent },
    { path: 'about', component: AboutComponent },
    { path: 'frameworks', component: FrameworksComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes) ;
