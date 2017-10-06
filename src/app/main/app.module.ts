import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from '../services/in-memory-data.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { HeroListComponent } from '../components/hero/list/hero-list.component';
import { HeroDetailComponent } from '../components/hero/detail/hero-detail.component';
import { HeroSearchComponent } from '../components/hero/search/hero-search.component';
import { HeroService } from '../services/hero/hero.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    DashboardComponent,
    AppComponent,
    HeroDetailComponent,
    HeroListComponent,
    HeroSearchComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }