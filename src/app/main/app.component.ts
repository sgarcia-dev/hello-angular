import { Component, OnInit } from '@angular/core';
import { Hero } from '../components/hero/hero.class';
import {HeroService} from '../services/hero/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  
  constructor(private heroService: HeroService) {}
  
  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroesData => this.heroes = heroesData);
  }

  onSelect(hero: Hero): void { 
    this.selectedHero = hero;
  }
}