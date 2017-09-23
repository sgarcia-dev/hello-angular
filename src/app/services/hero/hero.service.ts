import { Injectable } from '@angular/core';
import {Hero} from '../../components/hero/hero.class';
import {HEROES} from './hero.mock';

@Injectable()
export class HeroService {
    constructor() { }

    getHero(id: number): Promise<Hero> {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
    }

    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }
}