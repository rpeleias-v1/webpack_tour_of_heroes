import './rxjs-extensions';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner.component';
import {WelcomeComponent } from '../app/components/welcome/welcome.component';
import {DashboardComponent} from '../app/components/dashboard/dashboard.component';
import {HeroesComponent} from '../app/components/heroes/heroes.component';
import {HeroDetailComponent} from '../app/components/hero-detail/hero-detail.component';
import {HeroSearchComponent} from '../app/components/hero-search/hero-search.component';
import {AboutComponent} from '../app/components/about/about.component';

import { HeroService } from '../app/service/hero.service';
import { UserService } from '../app/service/user.service';
import { InMemoryDataService } from '../app/service/in-memory-data-service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { SharedModule } from './shared/shared.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule,
        SharedModule],
    declarations: [AppComponent, 
                    BannerComponent,
                    HeroDetailComponent, 
                    HeroesComponent, 
                    DashboardComponent, 
                    HeroSearchComponent, 
                    AboutComponent,
                    WelcomeComponent],
    providers: [HeroService, UserService],
    bootstrap: [AppComponent]
})
export class AppModule { }