import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {DashboardComponent} from '../app/components/dashboard/dashboard.component';
import {HeroesComponent} from '../app/components/heroes/heroes.component';
import {HeroDetailComponent} from '../app/components/hero-detail/hero-detail.component';

import { HeroService } from '../app/service/hero.service';
import { InMemoryDataService } from '../app/service/in-memory-data-service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule],
    declarations: [AppComponent, HeroDetailComponent, HeroesComponent, DashboardComponent],
    providers: [HeroService],
    bootstrap: [AppComponent]
})
export class AppModule { }