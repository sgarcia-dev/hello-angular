import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero/hero.class';
import { HeroService } from '../../services/hero/hero.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.template.html',
  styleUrls: ['./dashboard.styles.css']
})
export class DashboardComponent implements OnInit {
    heroes: Hero[];
    
    constructor(private heroService: HeroService) {}

    ngOnInit() {
        this.heroService.getHeroes().then(heroesData => {
            this.heroes = heroesData.slice(1,5);
        });
    }
}