import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.class';
import {HeroService} from '../../../services/hero/hero.service';

@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.template.html',
  styleUrls: ['./hero-list.styles.css']
})
export class HeroListComponent implements OnInit {
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