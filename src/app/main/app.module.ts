import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { HeroListComponent } from '../components/hero/list/hero-list.component';
import { HeroDetailComponent } from '../components/hero/detail/hero-detail.component';

import { HeroService } from '../services/hero/hero.service';

@NgModule({
  declarations: [
    DashboardComponent,
    AppComponent,
    HeroDetailComponent,
    HeroListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([{
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full'
    }, {
      path: 'dashboard',
      component: DashboardComponent
    } ,{
      path: 'heroes',
      component: HeroListComponent
    }, {
      path: 'detail/:id',
      component: HeroDetailComponent
    }])
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }