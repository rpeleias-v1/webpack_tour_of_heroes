import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroDetailComponent } from '../app/components/hero-detail/hero-detail.component';
import { HeroesComponent } from '../app/components/heroes/heroes.component';
import { DashboardComponent } from '../app/components/dashboard/dashboard.component';

const routes: Routes = [
    { path: '', redirectTo: '/heroes', pathMatch: 'full'},
    { path: 'heroes', component: HeroesComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/:id', component: HeroDetailComponent }
]

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }